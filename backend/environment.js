"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
const dotenv_1 = require("dotenv");
require("dotenv/config");
const path_1 = __importDefault(require("path"));
(0, dotenv_1.configDotenv)({ path: path_1.default.resolve(__dirname, ".env") });
var Environment;
(function (Environment) {
    Environment["Development"] = "development";
    Environment["Production"] = "production";
    Environment["Staging"] = "staging";
    Environment["Test"] = "test";
})(Environment || (exports.Environment = Environment = {}));
const environment = {
    nodeEnv: process.env.NODE_ENV,
    host: process.env.HOST,
    port: process.env.PORT,
    mongoUrl: `${process.env.MONGO_URI}${process.env.MONGO_DB_NAME}${process.env.NODE_ENV}`,
    privateKey: process.env.PRIVATE_KEY,
    publicKey: process.env.PUBLIC_KEY,
    morganEnabled: !!process.env.MORGAN_ENABLED,
    mongoDbLoggerEnabled: !!process.env.MONGODB_LOGGER_ENABLED,
    corsOrigin: process.env.CORS_ORIGIN,
    saltWorkFactor: parseInt(process.env.SALT_WORK_FACTOR),
    accessTokenTtl: parseInt(process.env.ACCESS_TOKEN_TTL) * 1000 * 60,
    refreshTokenTtl: parseInt(process.env.REFRESH_TOKEN_TTL) * 1000 * 60,
    cookieAllowedDomain: process.env.COOKIE_ALLOWED_DOMAIN
};
exports.default = environment;
//# sourceMappingURL=environment.js.map