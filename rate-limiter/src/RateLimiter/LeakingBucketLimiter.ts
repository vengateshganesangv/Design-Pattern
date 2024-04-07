// Inside RateLimiter folder: LeakingBucketLimiter.ts
import { IRateLimiter } from "./IRateLimiter";
import { Request } from "../Data/Request";
import { RateLimit } from "../Data/RateLimit";

export class LeakingBucketLimiter implements IRateLimiter {
  private queue: Request[];
  private capacity: number;
  private leakRate: number; // Requests processed per minute
  private lastLeakTimestamp: number;

  constructor(capacity: number, leakRate: number) {
    this.capacity = capacity;
    this.leakRate = leakRate;
    this.queue = [];
    this.lastLeakTimestamp = Date.now();
  }

  private leak() {
    const now = Date.now();
    const delta = (now - this.lastLeakTimestamp) / 60000; // in minute
    const requestsToProcess = Math.floor(delta * this.leakRate);
    this.queue.splice(0, requestsToProcess);
    this.lastLeakTimestamp = now;
  }

  public limit(request: Request): RateLimit {
    this.leak(); // Process the queue
    if (this.queue.length < this.capacity) {
      this.queue.push(request);
      return { isAllowed: true };
    } else {
      return {
        isAllowed: false,
        retryAfter: (this.queue.length - this.capacity) / this.leakRate + 1,
      };
    }
  }
}
