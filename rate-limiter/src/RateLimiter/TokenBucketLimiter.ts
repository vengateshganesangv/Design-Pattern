import { IRateLimiter } from "./IRateLimiter";
import { Request } from "../Data/Request";
import { RateLimit } from "../Data/RateLimit";

//Amazon + Stripe Using This Token Based Rate Limiter
export class TokenBucketLimiter implements IRateLimiter {
  private tokens: number;
  private lastRefillTimestamp: number;
  private refillRate: number; // Tokens added per minute
  private capacity: number;

  constructor(capacity: number, refillRate: number) {
    this.capacity = capacity;
    this.refillRate = refillRate;
    this.tokens = capacity;
    this.lastRefillTimestamp = Date.now();
  }

  private refill() {
    const now = Date.now();
    const delta = (now - this.lastRefillTimestamp) / 60000; // Convert milliseconds to minutes
    const tokensToAdd = delta * this.refillRate;
    this.tokens = Math.min(this.capacity, this.tokens + tokensToAdd);
    this.lastRefillTimestamp = now;
  }

  public limit(request: Request): RateLimit {
    this.refill(); // Ensure tokens are refilled based on time elapsed
    if (this.tokens >= 1) {
      this.tokens--;
      return { isAllowed: true };
    } else {
      return {
        isAllowed: false,
        retryAfter: Math.ceil((1 - this.tokens) / (this.refillRate / 60)),
      };
    }
  }
}
