interface RateLimitOptions {
    max: number;
    minutes: number;
    message?: string;
}
export declare function createRateLimit({ max, minutes, message }: RateLimitOptions): import("express-rate-limit").RateLimitRequestHandler;
export {};
//# sourceMappingURL=rate-limit.d.ts.map