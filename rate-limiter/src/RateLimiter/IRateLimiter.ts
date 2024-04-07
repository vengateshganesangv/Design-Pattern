import { Request } from "../Data/Request";
import { RateLimit } from "../Data/RateLimit";

export interface IRateLimiter {
  limit(request: Request): RateLimit;
}
