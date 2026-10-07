"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
var mongodb_connection_1 = require("./mongodb/mongodb.connection");
Object.defineProperty(exports, "connectDB", { enumerable: true, get: function () { return __importDefault(mongodb_connection_1).default; } });
//# sourceMappingURL=index.js.map