import type { VercelRequest, VercelResponse } from '@vercel/node';

// Fixed-window in-memory rate limiter, keyed on client IP.
//
// Mirrors Website/lib/rate-limit.js — same principles, adapted to the Vercel
// serverless shape (plain header object, VercelResponse instead of
// NextResponse). Keep the two in sync when either changes.
//
// Scope caveat: the store lives in one server instance. On serverless each
// warm instance keeps its own Map, so the real ceiling is
// `limit × concurrent instances`. This stops casual abuse and accidental
// hammering; it is not a hard global cap. For that you want the limiter at
// the edge (Cloudflare/WAF rule) or a shared store such as Upstash Redis.
//
// Filename is underscore-prefixed so Vercel does not expose it as a route.

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
export function rateLimit(
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
