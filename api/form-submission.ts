import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as yup from 'yup';

// ── Inline Rate Limiter (LRU, max 5000 entries) ──────────────────────
const rateLimitMap = new Map<string, { count: number; startTime: number }>();
const MAX_ENTRIES = 5000;

function rateLimit(ip: string, limit = 5, windowMs = 60 * 1000) {
  const now = Date.now();
  const userData = rateLimitMap.get(ip);

  if (userData) {
    rateLimitMap.delete(ip);
    rateLimitMap.set(ip, userData);
  }

  if (!userData) {
    if (rateLimitMap.size >= MAX_ENTRIES) {
      const oldestKey = rateLimitMap.keys().next().value;
      if (oldestKey) rateLimitMap.delete(oldestKey);
    }
    rateLimitMap.set(ip, { count: 1, startTime: now });
    return null;
  }

  if (now - userData.startTime > windowMs) {
    rateLimitMap.set(ip, { count: 1, startTime: now });
    return null;
  }

  if (userData.count >= limit) {
    return { error: 'Too many requests. Please try again later.', status: 429 };
  }

  userData.count += 1;
  return null;
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
    // 0. Rate Limiting (3 req / min / client)
    const forwarded = request.headers['x-forwarded-for'];
    const ip =
      (typeof forwarded === 'string' ? forwarded.split(',')[0].trim() : forwarded?.[0]?.split(',')[0]?.trim()) ||
      (request.headers['x-real-ip'] as string) ||
      request.socket?.remoteAddress ||
      '127.0.0.1';
    const ua = request.headers['user-agent'] || 'unknown';

    const rl = rateLimit(`${ip}-${ua}`, 3, 60_000);
    if (rl) {
      return response.status(rl.status).json({ success: false, error: rl.error });
    }

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

    if (!verifyData.success || verifyData.score < 0.5) {
      console.log('reCAPTCHA REJECTED – score:', verifyData.score, 'errors:', verifyData['error-codes']);
      return response.status(400).json({ success: false, error: 'Authentication failed. Please try again.' });
    }

    // 4. Forward to n8n webhook
    const n8nRes = await fetchWithTimeout(
      webhookUrl,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
