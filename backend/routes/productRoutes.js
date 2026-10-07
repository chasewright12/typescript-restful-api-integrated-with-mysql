"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// backend/routes/productRoutes.ts
const express_1 = require("express");
const productController = __importStar(require("../controller/productController"));
const validate_1 = require("../middleware/validate");
const jwt_middleware_1 = require("../security/jwt/jwt.middleware");
const productValidator_1 = require("../validator/productValidator");
const router = (0, express_1.Router)();
router.get("/", (0, validate_1.validate)({ query: productValidator_1.listProductsQuerySchema }), productController.getProducts);
router.get("/:id", (0, validate_1.validate)({ params: productValidator_1.productIdParamSchema }), productController.getProductById);
// Somente admin
router.post("/", jwt_middleware_1.authenticate, jwt_middleware_1.requireAdmin, (0, validate_1.validate)({ body: productValidator_1.createProductSchema }), productController.createProduct);
router.patch("/:id", jwt_middleware_1.authenticate, jwt_middleware_1.requireAdmin, (0, validate_1.validate)({ params: productValidator_1.productIdParamSchema, body: productValidator_1.updateProductSchema }), productController.updateProduct);
router.delete("/:id", jwt_middleware_1.authenticate, jwt_middleware_1.requireAdmin, (0, validate_1.validate)({ params: productValidator_1.productIdParamSchema }), productController.deleteProduct);
exports.default = router;
//# sourceMappingURL=productRoutes.js.map