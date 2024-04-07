// Inside RateLimiter folder: SlidingWindowLimiter.ts
import { IRateLimiter } from "./IRateLimiter";
import { Request } from "../Data/Request";
import { RateLimit } from "../Data/RateLimit";

export class SlidingWindowLimiter implements IRateLimiter {
  private store: Map<string, number[]>;
  private limiter: number;
  private windowSize: number; // in milliseconds

  constructor(limit: number, windowSize: number) {
    this.limiter = limit;
    this.windowSize = windowSize;
    this.store = new Map();
  }

  public limit(request: Request): RateLimit {
    const now = Date.now();
    const windowStart = Math.floor(now / this.windowSize) * this.windowSize;
    const previousWindowStart = windowStart - this.windowSize;
    const keyCurrent = `${request.userId}:${windowStart}`;
    const keyPrevious = `${request.userId}:${previousWindowStart}`;

    const countCurrent = this.store.get(keyCurrent) || 0;
    const countPrevious = this.store.get(keyPrevious) || 0;
    const timePassed = now - windowStart;
    const previousCountWeighted =
      countPrevious * ((this.windowSize - timePassed) / this.windowSize);

    const total = countCurrent + previousCountWeighted;

    if (total < this.limiter) {
      this.store.set(keyCurrent, countCurrent + 1);
      return { isAllowed: true };
    } else {
      return {
        isAllowed: false,
        retryAfter: windowStart + this.windowSize - now,
      };
    }
  }
}
