// Shared auth for outbound n8n webhook calls.
//
// The webhook is protected by a shared secret sent as a request header. In n8n
// this pairs with a "Header Auth" credential on the Webhook node — matching
// header name and value.
//
// The webhook URL is unguessable but it is not a secret: it travels through
// logs, proxies and browser history. The header is what actually stops anyone
// who learns the URL from posting junk into the automation.
//
// Filename is underscore-prefixed so Vercel does not expose it as a route.

export const N8N_AUTH_HEADER = 'X-Webhook-Secret';

/**
 * Auth headers for an n8n webhook request.
 *
 * Returns null when N8N_WEBHOOK_SECRET is unset, so callers fail closed rather
 * than sending an unauthenticated request that n8n would reject anyway.
 */
export function n8nAuthHeaders(): Record<string, string> | null {
  const secret = process.env.N8N_WEBHOOK_SECRET;
  if (!secret) return null;

  return { [N8N_AUTH_HEADER]: secret };
}
