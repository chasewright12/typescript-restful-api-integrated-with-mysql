"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import necessary database modules and types
const database_1 = __importDefault(require("../config/database"));
class User {
    id;
    username;
    email;
    password;
    constructor(id, username, email, password) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }
    static async create(username, email, password) {
        const [result] = await database_1.default.execute('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);
        return new User(result.insertId, username, email, password);
    }
    static async findById(id) {
        const [rows] = await database_1.default.execute('SELECT * FROM users WHERE id = ?', [id.toString()]);
        if (!rows || rows.length === 0) {
            return null;
        }
        const row = rows[0];
        const { id: userId, username, email, password } = row;
        return new User(userId, username, email, password);
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map