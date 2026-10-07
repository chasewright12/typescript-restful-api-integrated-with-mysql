"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER = void 0;
// User.ts
const mongoose_1 = require("mongoose");
exports.USER = 'User';
const userSchema = new mongoose_1.Schema({
    username: {
        required: true,
        type: String,
        trim: true,
        unique: true
    },
    email: {
        required: true,
        type: String,
        trim: true,
        lowercase: true,
        unique: true
    },
    password: {
        required: true,
        type: String
    }
}, {
    timestamps: true
});
const User = (0, mongoose_1.model)(exports.USER, userSchema);
exports.default = User;
//# sourceMappingURL=User.js.map