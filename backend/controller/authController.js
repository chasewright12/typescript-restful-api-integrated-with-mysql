"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async register(req, res, next) {
        try {
            const { username, email, password } = req.body;
            const user = await this.authService.register(username, email, password);
            return res.status(201).json(user);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=authController.js.map