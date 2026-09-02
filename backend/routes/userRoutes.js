"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controller/userController"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.get('/', authMiddleware_1.authMiddleware, userController_1.default.getUsers);
router.get('/:id', authMiddleware_1.authMiddleware, userController_1.default.getUserById);
router.post('/', userController_1.default.createUser);
router.put('/:id', authMiddleware_1.authMiddleware, userController_1.default.updateUser);
router.delete('/:id', authMiddleware_1.authMiddleware, userController_1.default.deleteUser);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map