"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getProducts = void 0;
const Product_1 = require("../models/Product");
const getProducts = async (req, res) => {
    const { page, limit, category, search } = req.query;
    const filter = {};
    if (category)
        filter.category = category;
    if (search)
        filter.name = { $regex: search, $options: "i" };
    const [items, total] = await Promise.all([
        Product_1.Product.find(filter)
            .skip((page - 1) * limit)
            .limit(limit)
            .lean(),
        Product_1.Product.countDocuments(filter),
    ]);
    res.json({ items, total, page, pages: Math.ceil(total / limit) });
};
exports.getProducts = getProducts;
const getProductById = async (req, res) => {
    const product = await Product_1.Product.findById(req.params.id).lean();
    if (!product)
        return res.status(404).json({ message: "Produto não encontrado" });
    res.json(product);
};
exports.getProductById = getProductById;
const createProduct = async (req, res) => {
    const product = await Product_1.Product.create(req.body);
    res.status(201).json(product);
};
exports.createProduct = createProduct;
const updateProduct = async (req, res) => {
    const product = await Product_1.Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!product)
        return res.status(404).json({ message: "Produto não encontrado" });
    res.json(product);
};
exports.updateProduct = updateProduct;
const deleteProduct = async (req, res) => {
    const product = await Product_1.Product.findByIdAndDelete(req.params.id);
    if (!product)
        return res.status(404).json({ message: "Produto não encontrado" });
    res.status(204).send();
};
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=productController.js.map