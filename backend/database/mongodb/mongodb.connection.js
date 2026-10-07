"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectMongoDB = disconnectMongoDB;
const mongoose_1 = __importDefault(require("mongoose"));
const environment_1 = __importDefault(require("../../environment"));
const logger_1 = require("../../logger");
async function connectMongoDB() {
    if (mongoose_1.default.connection.readyState === 0) {
        await mongoose_1.default.connect(environment_1.default.mongoUrl);
        logger_1.logger.info('Connected to MongoDB:' + environment_1.default.mongoUrl);
    }
}
async function disconnectMongoDB() {
    if (mongoose_1.default.connection.readyState === 0) {
        logger_1.logger.info('Mongoose is already disconnected');
        return;
    }
    await mongoose_1.default.disconnect();
    logger_1.logger.info('Disconnected from MongoDB');
}
exports.default = connectMongoDB;
//# sourceMappingURL=mongodb.connection.js.map