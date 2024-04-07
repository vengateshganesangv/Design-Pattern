//isAllowed - It tells whether request served or not
//retryAfter - It tells how long need to wait for another request
export interface RateLimit {
  isAllowed: boolean;
  retryAfter?: number;
}
