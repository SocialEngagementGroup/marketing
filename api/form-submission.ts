import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { recaptchaToken, ...formData } = request.body;

  if (!recaptchaToken) {
    return response.status(400).json({ success: false, error: 'Missing reCAPTCHA token' });
  }

  try {
    // 1. Verify token with Google
    const verifyRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      { method: 'POST' }
    );

    const verifyData = await verifyRes.json();

    if (!verifyData.success || verifyData.score < 0.5) {
      console.log("reCAPTCHA REJECTED - success:", verifyData.success, "score:", verifyData.score, "error-codes:", verifyData["error-codes"]);
      return response.status(400).json({
        success: false,
        error: 'reCAPTCHA verification failed',
        score: verifyData.score,
        details: verifyData
      });
    }

    // 2. Forward to n8n webhook if reCAPTCHA passes
    const n8nRes = await fetch(process.env.N8N_WEBHOOK_URL || '', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (n8nRes.ok) {
      return response.status(200).json({ success: true, message: 'Form submitted successfully' });
    } else {
      const errorText = await n8nRes.text();
      console.error("n8n Webhook Error:", errorText);
      return response.status(500).json({ success: false, error: 'Failed to forward to webhook' });
    }

  } catch (error) {
    console.error('API Route Error:', error);
    return response.status(500).json({ success: false, error: 'Internal server error' });
  }
}
