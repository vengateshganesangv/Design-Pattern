import { Request } from "./Data/Request";
import { RateLimiterFactory } from "./Factory/RateLimiterFactory";

// Example usage
const userRequest: Request = { userId: "user123", resource: "/api/data" };
const ipRequest: Request = { userId: "192.168.1.1", resource: "/api/data" }; // Using IP as userId

// Configuration based on the user type or resource sensitivity
const userLimiter = RateLimiterFactory.createLimiter({
  type: "tokenBucket",
  capacity: 100,
  refillRate: 10,
});

const ipLimiter = RateLimiterFactory.createLimiter({
  type: "fixedWindow",
  capacity: 200,
  windowSize: 60000, // 1 minute window
});

console.log("User Rate Limit:", userLimiter.limit(userRequest));
console.log("IP Rate Limit:", ipLimiter.limit(ipRequest));
