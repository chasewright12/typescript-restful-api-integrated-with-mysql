import { Product } from "../models/Product";

export const list = async (page: number, limit: number, category?: string, search?: string) => {
    const filter: Record<string, unknown> = {};
    if (category) filter.category = category;
    if (search) filter.$text = { $search: search };

    const [items, total] = await Promise.all([
        Product.find(filter).skip((page - 1) * limit).limit(limit).lean(),
        Product.countDocuments(filter),
    ]);
    return { items, total, page, pages: Math.ceil(total / limit) };
};

export const findById = (id: string) => Product.findById(id).lean();