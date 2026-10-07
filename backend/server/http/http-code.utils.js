"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpCode = void 0;
var HttpCode;
(function (HttpCode) {
    HttpCode[HttpCode["Ok"] = 200] = "Ok";
    HttpCode[HttpCode["Created"] = 201] = "Created";
    HttpCode[HttpCode["BadRequest"] = 400] = "BadRequest";
    HttpCode[HttpCode["Unauthorized"] = 401] = "Unauthorized";
    HttpCode[HttpCode["Forbidden"] = 403] = "Forbidden";
    HttpCode[HttpCode["NotFound"] = 404] = "NotFound";
    HttpCode[HttpCode["InternalServerError"] = 500] = "InternalServerError";
    HttpCode[HttpCode["UnknowError"] = 520] = "UnknowError";
})(HttpCode || (exports.HttpCode = HttpCode = {}));
//# sourceMappingURL=http-code.utils.js.map