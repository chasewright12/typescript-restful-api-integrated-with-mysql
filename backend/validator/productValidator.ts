import { z } from "zod";

const objectId = z.string().regex(/^[a-f\d]{24}$/i, "ID inválido");

export const productIdParamSchema = z.object({ id: objectId });

export const createProductSchema = z.object({
    name: z.string().min(2).max(120),
    description: z.string().max(2000).optional(),
    price: z.number().positive(),
    stock: z.number().int().nonnegative().default(0),
    category: z.string().min(1),
    images: z.array(z.string().url()).default([]),
});

export const updateProductSchema = createProductSchema.partial();

export const listProductsQuerySchema = z.object({
    page: z.coerce.number().int().positive().default(1),
    limit: z.coerce.number().int().positive().max(100).default(20),
    category: z.string().optional(),
    search: z.string().optional(),
});