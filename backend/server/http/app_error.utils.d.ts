import { HttpCode } from './http-code.utils';
type StatusCodeType = HttpCode;
export declare class AppError extends Error {
    statusCode: StatusCodeType;
    isOperational: boolean;
    status: 'fail' | 'error';
    details?: object;
    constructor(message: string, statusCode: StatusCodeType, details?: object);
}
export {};
//# sourceMappingURL=app_error.utils.d.ts.map