"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileLoggerTransport = exports.consoleLoggerTransport = void 0;
const winston_1 = require("winston");
const { combine, timestamp, colorize, printf, json } = winston_1.format;
const consoleFormat = combine(colorize(), timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), printf(({ level, message, timestamp, ...meta }) => {
    const extra = Object.keys(meta).length ? ` ${JSON.stringify(meta)}` : "";
    return `${timestamp} ${level}: ${message}${extra}`;
}));
exports.consoleLoggerTransport = new winston_1.transports.Console({
    format: consoleFormat,
});
exports.fileLoggerTransport = new winston_1.transports.File({
    filename: "logs/error.log",
    level: "error",
    format: combine(timestamp(), json()),
});
//# sourceMappingURL=winston.transports.js.map