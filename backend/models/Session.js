"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SESSION = void 0;
const mongoose_1 = require("mongoose");
const User_1 = require("../models/User");
const session_constants_1 = require("../constants/session.constants");
exports.SESSION = 'Session';
const sessionSchema = new mongoose_1.Schema({
    user: {
        ref: User_1.USER,
        type: mongoose_1.Schema.Types.ObjectId
    },
    isValid: {
        default: true,
        type: Boolean
    },
    userAgent: {
        required: true,
        type: String,
        trim: true,
        minlength: session_constants_1.SessionMinMaxLength.UserAgentMinLength,
        maxlength: session_constants_1.SessionMinMaxLength.UserAgentMaxLength
    }
}, {
    timestamps: true
});
const Session = (0, mongoose_1.model)(exports.SESSION, sessionSchema);
exports.default = Session;
//# sourceMappingURL=Session.js.map