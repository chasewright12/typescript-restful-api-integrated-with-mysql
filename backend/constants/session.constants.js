"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionErrorMessages = exports.SessionMinMaxLength = void 0;
exports.SessionMinMaxLength = {
    UserAgentMinLength: 2,
    UserAgentMaxLength: 256
};
exports.SessionErrorMessages = {
    UserAgentRequired: 'User agent is required',
    UserAgentMinLength: `User agent must be at least ${exports.SessionMinMaxLength.UserAgentMinLength} characters long`,
    UserAgentMaxLength: `User agent must be less than ${exports.SessionMinMaxLength.UserAgentMaxLength} characters long`
};
//# sourceMappingURL=session.constants.js.map