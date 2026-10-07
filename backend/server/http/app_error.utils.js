"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError extends Error {
    statusCode;
    isOperational;
    status;
    details;
    constructor(message, statusCode, details) {
        super(message);
        this.statusCode = statusCode;
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = `${statusCode}`.startsWith('5') ? false : true;
        if (details !== undefined) {
            this.details = details;
        }
    }
}
exports.AppError = AppError;
//# sourceMappingURL=app_error.utils.js.map