// backend/routes/productRoutes.ts
import { Router } from "express";
import * as productController from "../controller/productController";
import { validate } from "../middleware/validate";
import { authenticate, requireAdmin } from "../security/jwt/jwt.middleware";
import {
    createProductSchema,
    updateProductSchema,
    productIdParamSchema,
    listProductsQuerySchema,
} from "../validator/productValidator";

const router = Router();

router.get("/", validate({ query: listProductsQuerySchema }), productController.getProducts);
router.get("/:id", validate({ params: productIdParamSchema }), productController.getProductById);

// Somente admin
router.post(
    "/",
    authenticate,
    requireAdmin,
    validate({ body: createProductSchema }),
    productController.createProduct
);

router.patch(
    "/:id",
    authenticate,
    requireAdmin,
    validate({ params: productIdParamSchema, body: updateProductSchema }),
    productController.updateProduct
);

router.delete(
    "/:id",
    authenticate,
    requireAdmin,
    validate({ params: productIdParamSchema }),
    productController.deleteProduct
);

export default router;