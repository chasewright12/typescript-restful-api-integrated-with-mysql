"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testConnection = testConnection;
// Database configuration file for the backend of the RESTful API project
const promise_1 = __importDefault(require("mysql2/promise"));
const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'my_database',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
};
const pool = promise_1.default.createPool(dbConfig);
async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('Database connection established successfully.');
        connection.release();
    }
    catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    }
}
exports.default = pool;
//# sourceMappingURL=database.js.map