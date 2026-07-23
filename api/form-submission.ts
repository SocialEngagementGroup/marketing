import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as yup from 'yup';

// Everything below is deliberately inlined rather than split into shared
// modules. package.json sets "type": "module", so this file is ESM at runtime
// and an extensionless relative import (`./_n8n`) fails to resolve — the
// function then dies with FUNCTION_INVOCATION_FAILED before the handler runs.
// This project has exactly one endpoint, so shared modules bought nothing.
//
// The rate limiter mirrors Website/lib/rate-limit.js — same principles, same
// behaviour. Keep the two in sync when either changes.

// ── n8n auth ─────────────────────────────────────────────────────────
//
// The webhook is protected by a shared secret sent as a request header, paired
// with a "Header Auth" credential on the n8n Webhook node. The webhook URL is
// unguessable but it is not a secret: it travels through logs, proxies and
// browser history. The header is what actually stops anyone who learns the URL
// from posting junk into the automation.
const N8N_AUTH_HEADER = 'X-Webhook-Secret';

/**
 * @returns null when N8N_WEBHOOK_SECRET is unset, so callers fail closed rather
 *   than sending an unauthenticated request that n8n would reject anyway.
 */
function n8nAuthHeaders(): Record<string, string> | null {
  const secret = process.env.N8N_WEBHOOK_SECRET;
  if (!secret) return null;

  return { [N8N_AUTH_HEADER]: secret };
}

// ── Rate limiter ─────────────────────────────────────────────────────
//
// Fixed-window, in-memory, keyed on client IP.
//
// Scope caveat: the store lives in one server instance. On serverless each
// warm instance keeps its own Map, so the real ceiling is
// `limit × concurrent instances`. This stops casual abuse and accidental
// hammering; it is not a hard global cap. For that you want the limiter at
// the edge (Cloudflare/WAF rule) or a shared store such as Upstash Redis.
const buckets = new Map<string, { count: number; startTime: number }>();
const MAX_ENTRIES = 5000;

// Headers set by a trusted proxy in front of the app. A client cannot forge
// these end-to-end, because the proxy overwrites whatever it was sent.
//
// `x-forwarded-for` is deliberately not in this list: any client can send it
// and its first entry is attacker-controlled. It is used only as a last
// resort below, when no trusted proxy header is present.
const TRUSTED_IP_HEADERS = [
  'cf-connecting-ip', // Cloudflare
  'x-vercel-forwarded-for', // Vercel
  'true-client-ip', // Akamai, Cloudflare Enterprise
  'x-real-ip', // nginx and most reverse proxies
];

function headerValue(req: VercelRequest, name: string): string | null {
  const raw = req.headers[name];
  const value = Array.isArray(raw) ? raw[0] : raw;
  if (!value) return null;

  return value.split(',')[0].trim() || null;
}

function getClientIp(req: VercelRequest): string {
  for (const header of TRUSTED_IP_HEADERS) {
    const value = headerValue(req, header);
    if (value) return value;
  }

  // Best effort. Spoofable, so a deployment that lands here should add a
  // proxy that sets one of the headers above.
  const forwarded = headerValue(req, 'x-forwarded-for');
  if (forwarded) return forwarded;

  return req.socket?.remoteAddress || 'unknown';
}

// Drop entries whose window has closed. Runs on write, bounded by MAX_ENTRIES.
function prune(now: number, windowMs: number) {
  for (const [key, entry] of buckets) {
    if (now - entry.startTime > windowMs) buckets.delete(key);
  }
}

/**
 * Applies the limit, writing a 429 straight to `response` when exceeded.
 *
 * @returns true when the request was rate limited and the response has already
 *   been sent — the caller must return immediately. False when it may proceed.
 */
function rateLimit(
  request: VercelRequest,
  response: VercelResponse,
  limit = 5,
  windowMs = 60 * 1000
): boolean {
  // Keyed on IP alone. Folding User-Agent (or any other client-controlled
  // header) into the key hands the caller a fresh bucket per forged value,
  // which defeats the limit entirely.
  const key = getClientIp(request);

  const now = Date.now();
  const entry = buckets.get(key);

  // Fresh key, or the previous window has closed.
  if (!entry || now - entry.startTime > windowMs) {
    if (buckets.size >= MAX_ENTRIES) {
      prune(now, windowMs);
      // Still full of live windows: evict the least recently touched.
      if (buckets.size >= MAX_ENTRIES) {
        const oldest = buckets.keys().next().value;
        if (oldest !== undefined) buckets.delete(oldest);
      }
    }

    buckets.delete(key);
    buckets.set(key, { count: 1, startTime: now });
    return false;
  }

  // LRU bump: re-inserting moves the key to the newest position, so the
  // eviction above drops genuinely idle callers rather than active ones.
  buckets.delete(key);
  buckets.set(key, entry);

  if (entry.count >= limit) {
    const retryAfter = Math.max(
      1,
      Math.ceil((entry.startTime + windowMs - now) / 1000)
    );

    response.setHeader('Retry-After', String(retryAfter));
    response.setHeader('RateLimit-Limit', String(limit));
    response.setHeader('RateLimit-Remaining', '0');
    response.setHeader('RateLimit-Reset', String(retryAfter));
    response.status(429).json({
      success: false,
      error: 'Too many requests. Please try again later.',
    });

    return true;
  }

  entry.count += 1;
  return false;
}

// ── Validation Schema ────────────────────────────────────────────────
const formSchema = yup.object({
  name: yup.string().required().max(100),
  email: yup.string().email().required().max(150),
  phone: yup.string().max(20).optional(),
  business: yup.string().max(100).optional(),
  message: yup.string().max(2000).optional(),
  package: yup.string().max(50).optional(),
  pageUrl: yup.string().optional().max(500),
});

// ── Fetch with timeout ───────────────────────────────────────────────
function fetchWithTimeout(url: string, options: any = {}, timeoutMs = 20000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  return fetch(url, { ...options, signal: controller.signal }).finally(() =>
    clearTimeout(timer)
  );
}

// ── Handler ──────────────────────────────────────────────────────────
export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 0. Rate Limiting (3 req / min / IP)
    if (rateLimit(request, response, 3, 60_000)) return;

    const { recaptchaToken, ...formData } = request.body || {};

    if (!recaptchaToken) {
      return response.status(400).json({ success: false, error: 'Missing authentication token' });
    }

    // 1. Validate payload
    let validatedData;
    try {
      validatedData = await formSchema.validate(formData, { abortEarly: false, stripUnknown: true });
    } catch (err: any) {
      return response.status(400).json({ success: false, error: 'Validation failed', details: err.errors });
    }

    // 2. Check env
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!secret || !webhookUrl) {
      console.error('Missing RECAPTCHA_SECRET_KEY or N8N_WEBHOOK_URL');
      return response.status(500).json({ success: false, error: 'Internal server error' });
    }

    // Fail closed: never send an unauthenticated request to the automation.
    const authHeaders = n8nAuthHeaders();
    if (!authHeaders) {
      console.error('Form submission API: N8N_WEBHOOK_SECRET is not set');
      return response.status(500).json({ success: false, error: 'Internal server error' });
    }

    // 3. Verify reCAPTCHA
    const verifyRes = await fetchWithTimeout(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ secret, response: String(recaptchaToken) }),
      },
      15_000
    );

    if (!verifyRes.ok) {
      console.error('reCAPTCHA service error:', verifyRes.status);
      return response.status(502).json({ success: false, error: 'Authentication service unavailable' });
    }

    const verifyData = await verifyRes.json();

    // `action` must match the one the form minted the token with. Without this
    // check a token issued for any other action on the same site key is
    // accepted here, which is exactly what a replay would use.
    if (
      !verifyData.success ||
      verifyData.score < 0.5 ||
      verifyData.action !== 'contact_form'
    ) {
      console.log(
        'reCAPTCHA REJECTED – score:',
        verifyData.score,
        'action:',
        verifyData.action,
        'errors:',
        verifyData['error-codes']
      );
      return response.status(400).json({ success: false, error: 'Authentication failed. Please try again.' });
    }

    // 4. Forward to n8n webhook
    const n8nRes = await fetchWithTimeout(
      webhookUrl,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeaders },
        body: JSON.stringify({ ...validatedData, submittedAt: new Date().toISOString() }),
      },
      15_000
    );

    if (n8nRes.ok) {
      return response.status(200).json({ success: true, message: 'Message sent securely' });
    } else {
      console.error('n8n webhook failed:', n8nRes.status);
      return response.status(502).json({ success: false, error: 'Delivery failed' });
    }
  } catch (error: any) {
    const isAbort = error?.name === 'AbortError';
    console.error('API error:', error);
    return response.status(isAbort ? 504 : 500).json({
      success: false,
      error: isAbort ? 'Request timed out' : 'Internal server error',
    });
  }
}
