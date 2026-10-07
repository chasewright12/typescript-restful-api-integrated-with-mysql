"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = __importStar(require("../environment"));
const http_code_utils_1 = require("../server/http/http-code.utils");
// import { logger } from '../logger'; // Qual tipo de logger importar?
const errorHandler = (err, req, res, next) => {
    // logger.error(err.message, err);
    err.statusCode ||= 500;
    err.status ||= 'error';
    const productionErrorResponse = {
        status: err.status,
        statusCode: err.statusCode,
        message: err.message,
        details: err.details
    };
    const productionEnvironment = environment_1.default.nodeEnv === environment_1.Environment.Production;
    const isTrustedError = err.isOperational;
    if (productionEnvironment) {
        if (isTrustedError) {
            return res.status(err.statusCode).json(productionErrorResponse);
        }
        return res.status(http_code_utils_1.HttpCode.InternalServerError).json({
            status: 'error',
            statusCode: http_code_utils_1.HttpCode.InternalServerError,
            message: 'Something went wrong!'
        });
    }
    const nonProductionErrorResponse = {
        ...productionErrorResponse,
        stack: err.stack
    };
    res.status(err.statusCode).json(nonProductionErrorResponse);
};
exports.default = errorHandler;
//# sourceMappingURL=errorHandler.middleware.js.map