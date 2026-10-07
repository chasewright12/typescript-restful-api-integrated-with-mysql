"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const app_error_utils_1 = require("../server/http/app_error.utils");
const http_code_utils_1 = require("../server/http/http-code.utils");
const validateRequest = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        });
        next();
    }
    catch (error) {
        let err = error;
        if (err instanceof zod_1.ZodError) {
            err = err.issues.map((e) => ({ path: e.path[1], message: e.message }));
        }
        next(new app_error_utils_1.AppError('Validation Error', http_code_utils_1.HttpCode.BadRequest, err));
    }
};
exports.default = validateRequest;
//# sourceMappingURL=validateRequestMiddleware.js.map