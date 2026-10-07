"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signJwt = signJwt;
exports.verifyJwt = verifyJwt;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const environment_1 = __importDefault(require("../../environment"));
function signJwt(payload, options) {
    return jsonwebtoken_1.default.sign(payload, environment_1.default.privateKey, {
        ...(options && options),
        algorithm: 'RS256'
    });
}
function verifyJwt(token) {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.verify(token, environment_1.default.publicKey, (err, decoded) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(decoded);
            }
        });
    })
        .then((decoded) => {
        return {
            valid: true,
            expired: false,
            decoded
        };
    })
        .catch((e) => {
        return {
            valid: false,
            expired: e.message === 'jwt expired',
            decoded: null
        };
    });
}
//# sourceMappingURL=jwt.utils.js.map