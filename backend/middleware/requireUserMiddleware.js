"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_code_utils_1 = require("../server/http/http-code.utils");
const app_error_utils_1 = require("../server/http/app_error.utils");
const requireUser = (req, res, next) => {
    const user = res.locals.user;
    if (!user) {
        return next(new app_error_utils_1.AppError('Forbidden', http_code_utils_1.HttpCode.Forbidden));
    }
    next();
};
exports.default = requireUser;
//# sourceMappingURL=requireUserMiddleware.js.map