import { IRateLimiter } from "../RateLimiter/IRateLimiter";
import { TokenBucketLimiter } from "../RateLimiter/TokenBucketLimiter";
import { LeakingBucketLimiter } from "../RateLimiter/LeakingBucketLimiter";
import { FixedWindowLimiter } from "../RateLimiter/FixedWindowLimiter";
import { SlidingWindowLimiter } from "../RateLimiter/SlidingWindowLimiter";

interface LimiterConfig {
  type: string;
  capacity?: number;
  refillRate?: number;
  windowSize?: number;
  leakRate?: number;
}

export class RateLimiterFactory {
  static createLimiter(config: LimiterConfig): IRateLimiter {
    switch (config.type) {
      case "tokenBucket":
        return new TokenBucketLimiter(config.capacity!, config.refillRate!);
      case "leakingBucket":
        return new LeakingBucketLimiter(config.capacity!, config.leakRate!);
      case "fixedWindow":
        return new FixedWindowLimiter(config.capacity!, config.windowSize!);
      case "slidingWindow":
        return new SlidingWindowLimiter(config.capacity!, config.windowSize!);
      default:
        throw new Error("Invalid rate limiter type");
    }
  }
}
