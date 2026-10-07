"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = exports.list = void 0;
const Product_1 = require("../models/Product");
const list = async (page, limit, category, search) => {
    const filter = {};
    if (category)
        filter.category = category;
    if (search)
        filter.$text = { $search: search };
    const [items, total] = await Promise.all([
        Product_1.Product.find(filter).skip((page - 1) * limit).limit(limit).lean(),
        Product_1.Product.countDocuments(filter),
    ]);
    return { items, total, page, pages: Math.ceil(total / limit) };
};
exports.list = list;
const findById = (id) => Product_1.Product.findById(id).lean();
exports.findById = findById;
//# sourceMappingURL=productService.js.map