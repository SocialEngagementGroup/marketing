import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as yup from 'yup';
import { rateLimit } from '../lib/rate-limit';

const formSchema = yup.object({
  name: yup.string().required().max(100),
  email: yup.string().email().required().max(150),
  phone: yup.string().max(20).optional(),
  business: yup.string().max(100).optional(),
  message: yup.string().max(2000).optional(),
  package: yup.string().max(50).optional(),
});

function fetchWithTimeout(url: string, options: RequestInit = {}, timeoutMs = 20000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  return fetch(url, { ...options, signal: controller.signal }).finally(() =>
    clearTimeout(timer)
  );
}

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 0. Extract fingerprint and Apply Rate Limits (3 req / 1 min)
    let forwardedIp = "127.0.0.1";
    const forwardedHeader = request.headers["x-forwarded-for"];
    if (forwardedHeader) {
      forwardedIp = typeof forwardedHeader === 'string' ? forwardedHeader.split(",")[0].trim() : forwardedHeader[0].split(",")[0].trim();
    }
    const reqIp = request.socket.remoteAddress || request.headers["x-real-ip"] || forwardedIp;
    const userAgent = request.headers["user-agent"] || "unknown";
    const clientKey = `${reqIp}-${userAgent}`;

    const rateLimitError = rateLimit(clientKey, 3, 60 * 1000);
    if (rateLimitError) {
      return response.status(rateLimitError.status).json({ success: false, error: rateLimitError.error });
    }

    const { recaptchaToken, ...formData } = request.body || {};

    if (!recaptchaToken) {
      return response.status(400).json({ success: false, error: 'Missing authentication token' });
    }

    // 1. Data Validation
    let validatedData;
    try {
      validatedData = await formSchema.validate(formData, { abortEarly: false, stripUnknown: true });
    } catch (validationError: any) {
      return response.status(400).json({
        success: false,
        error: "Validation failed",
        details: validationError.errors
      });
    }

    // 2. Validate Env Variables
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!secret || !webhookUrl) {
      console.error("Critical Server Error: Missing environment variables.");
      return response.status(500).json({ success: false, error: "Internal server error" });
    }

    // 3. Verify token with Google
    const verifyRes = await fetchWithTimeout(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: String(recaptchaToken) }),
      },
      15000 // 15s timeout
    );

    if (!verifyRes.ok) {
       console.error("reCAPTCHA service unavailable:", verifyRes.status);
       return response.status(502).json({ success: false, error: "Authentication service unavailable" });
    }

    const verifyData = await verifyRes.json();

    if (!verifyData.success || verifyData.score < 0.5) {
      // Log details internally, mask them for the client
      console.log("reCAPTCHA REJECTED - score:", verifyData.score, "action:", verifyData.action, "errors:", verifyData["error-codes"]);
      return response.status(400).json({
        success: false,
        error: 'Authentication failed. Please try again.'
      });
    }

    // 4. Forward to n8n webhook
    const n8nRes = await fetchWithTimeout(
      webhookUrl,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...validatedData,
          submittedAt: new Date().toISOString()
        }),
      },
      15000 // 15s timeout
    );

    if (n8nRes.ok) {
      return response.status(200).json({ success: true, message: 'Message sent securely' });
    } else {
      console.error("n8n Webhook failed with status:", n8nRes.status);
      return response.status(502).json({ success: false, error: 'Delivery failed' });
    }

  } catch (error: any) {
    const isAbort = error?.name === "AbortError";
    console.error('API Route Error:', error);
    return response.status(isAbort ? 504 : 500).json({ 
        success: false, 
        error: isAbort ? 'Request timed out' : 'Internal server error' 
    });
  }
}
