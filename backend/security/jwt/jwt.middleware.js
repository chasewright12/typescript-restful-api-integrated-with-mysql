"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = authenticate;
exports.requireAdmin = requireAdmin;
const jwt_utils_1 = require("./jwt.utils");
async function authenticate(req, res, next) {
    const header = req.headers.authorization;
    if (!header?.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Token não informado" });
    }
    const token = header.slice(7);
    const { valid, expired, decoded } = await (0, jwt_utils_1.verifyJwt)(token);
    if (!valid || !decoded) {
        return res
            .status(401)
            .json({ message: expired ? "Token expirado" : "Token inválido" });
    }
    req.user = decoded;
    next();
}
function requireAdmin(req, res, next) {
    if (req.user?.role !== "admin") {
        return res.status(403).json({ message: "Acesso restrito a administradores" });
    }
    next();
}
//# sourceMappingURL=jwt.middleware.js.map