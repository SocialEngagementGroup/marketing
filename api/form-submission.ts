import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as yup from 'yup';
import { n8nAuthHeaders } from './_n8n';
import { rateLimit } from './_rate-limit';

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
