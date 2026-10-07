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
require("winston-mongodb");
const winston_1 = require("winston");
const environment_1 = __importStar(require("../../environment"));
const winston_transports_1 = require("./winston.transports");
const winstonLogger = (0, winston_1.createLogger)({
    format: winston_1.format.combine(winston_1.format.metadata(), winston_1.format.timestamp(), winston_1.format.json()),
    transports: [winston_transports_1.consoleLoggerTransport, winston_transports_1.fileLoggerTransport],
    exitOnError: false
});
if (environment_1.default.mongoDbLoggerEnabled &&
    environment_1.default.nodeEnv !== environment_1.Environment.Test) {
    const db = `${environment_1.default.mongoUrl}-logs`;
    const dbTransport = new winston_1.transports.MongoDB({
        db,
        level: 'error',
        options: {
            useUnifiedTopology: true
        }
    });
    winstonLogger.info(`Logger is connecting to ${db}`);
    winstonLogger.add(dbTransport);
}
exports.default = winstonLogger;
//# sourceMappingURL=winston.logger.js.map