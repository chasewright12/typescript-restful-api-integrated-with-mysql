"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProductsQuerySchema = exports.updateProductSchema = exports.createProductSchema = exports.productIdParamSchema = void 0;
const zod_1 = require("zod");
const objectId = zod_1.z.string().regex(/^[a-f\d]{24}$/i, "ID inválido");
exports.productIdParamSchema = zod_1.z.object({ id: objectId });
exports.createProductSchema = zod_1.z.object({
    name: zod_1.z.string().min(2).max(120),
    description: zod_1.z.string().max(2000).optional(),
    price: zod_1.z.number().positive(),
    stock: zod_1.z.number().int().nonnegative().default(0),
    category: zod_1.z.string().min(1),
    images: zod_1.z.array(zod_1.z.string().url()).default([]),
});
exports.updateProductSchema = exports.createProductSchema.partial();
exports.listProductsQuerySchema = zod_1.z.object({
    page: zod_1.z.coerce.number().int().positive().default(1),
    limit: zod_1.z.coerce.number().int().positive().max(100).default(20),
    category: zod_1.z.string().optional(),
    search: zod_1.z.string().optional(),
});
//# sourceMappingURL=productValidator.js.map