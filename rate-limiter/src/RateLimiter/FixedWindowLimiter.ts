import { IRateLimiter } from "./IRateLimiter";
import { Request } from "../Data/Request";
import { RateLimit } from "../Data/RateLimit";

export class FixedWindowLimiter implements IRateLimiter {
  private counts: Map<string, number>;
  private limiter: number;
  private windowSize: number; // in milliseconds

  constructor(limit: number, windowSize: number) {
    this.limiter = limit;
    this.windowSize = windowSize;
    this.counts = new Map();
  }

  public limit(request: Request): RateLimit {
    const key = `${request.userId}:${Math.floor(Date.now() / this.windowSize)}`;
    const currentCount = this.counts.get(key) || 0;

    if (currentCount < this.limiter) {
      this.counts.set(key, currentCount + 1);
      return { isAllowed: true };
    } else {
      return {
        isAllowed: false,
        retryAfter:
          (Math.floor(Date.now() / this.windowSize) + 1) * this.windowSize -
          Date.now(),
      };
    }
  }
}
