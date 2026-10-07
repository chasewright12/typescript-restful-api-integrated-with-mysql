import { transports, format } from "winston";

const { combine, timestamp, colorize, printf, json } = format;

const consoleFormat = combine(
    colorize(),
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    printf(({ level, message, timestamp, ...meta }) => {
        const extra = Object.keys(meta).length ? ` ${JSON.stringify(meta)}` : "";
        return `${timestamp} ${level}: ${message}${extra}`;
    })
);

export const consoleLoggerTransport = new transports.Console({
    format: consoleFormat,
});

export const fileLoggerTransport = new transports.File({
    filename: "logs/error.log",
    level: "error",
    format: combine(timestamp(), json()),
});