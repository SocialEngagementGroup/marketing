// Simple in-memory rate limiter using Map with LRU eviction.
// Limits the map to 5000 entries to prevent memory DoS.
const rateLimitMap = new Map<string, { count: number; startTime: number }>();
const MAX_ENTRIES = 5000;

export function rateLimit(ip: string, limit = 5, windowMs = 60 * 1000) {
  const now = Date.now();
  const userData = rateLimitMap.get(ip);

  // Implement LRU: bump to the "newest" position in the Map by deleting and re-inserting
  if (userData) {
    rateLimitMap.delete(ip);
    rateLimitMap.set(ip, userData);
  }

  if (!userData) {
    // Prevent memory DoS by maintaining a max capacity
    if (rateLimitMap.size >= MAX_ENTRIES) {
      const oldestKey = rateLimitMap.keys().next().value;
      if (oldestKey) {
          rateLimitMap.delete(oldestKey);
      }
    }

    rateLimitMap.set(ip, {
      count: 1,
      startTime: now,
    });
    return null; // Allowed
  }

  // Check if window has expired
  if (now - userData.startTime > windowMs) {
    rateLimitMap.set(ip, {
      count: 1,
      startTime: now,
    });
    return null; // Allowed
  }

  // Window hasn't expired, check limit
  if (userData.count >= limit) {
    return { error: "Too many requests. Please try again later.", status: 429 };
  }

  // Increment counter
  userData.count += 1;
  return null; // Allowed
}
