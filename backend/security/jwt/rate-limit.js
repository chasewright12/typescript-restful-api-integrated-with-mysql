"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRateLimit = createRateLimit;
const express_rate_limit_1 = require("express-rate-limit");
function createRateLimit({ max, minutes, message = 'Too many requests.' }) {
    return (0, express_rate_limit_1.rateLimit)({
        max,
        windowMs: 1000 * 60 * minutes,
        message
    });
}
//# sourceMappingURL=rate-limit.js.map