import { Request, Response } from "express";
import { Product } from "../models/Product";

export const getProducts = async (req: Request, res: Response) => {
    const { page, limit, category, search } = req.query as any;

    const filter: Record<string, unknown> = {};
    if (category) filter.category = category;
    if (search) filter.name = { $regex: search, $options: "i" };

    const [items, total] = await Promise.all([
        Product.find(filter)
            .skip((page - 1) * limit)
            .limit(limit)
            .lean(),
        Product.countDocuments(filter),
    ]);

    res.json({ items, total, page, pages: Math.ceil(total / limit) });
};

export const getProductById = async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id).lean();
    if (!product) return res.status(404).json({ message: "Produto não encontrado" });
    res.json(product);
};

export const createProduct = async (req: Request, res: Response) => {
    const product = await Product.create(req.body);
    res.status(201).json(product);
};

export const updateProduct = async (req: Request, res: Response) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!product) return res.status(404).json({ message: "Produto não encontrado" });
    res.json(product);
};

export const deleteProduct = async (req: Request, res: Response) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Produto não encontrado" });
    res.status(204).send();
};