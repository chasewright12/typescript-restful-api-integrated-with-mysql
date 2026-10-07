"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true, minlength: 2, maxlength: 120 },
    description: { type: String, trim: true, maxlength: 2000 },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0, default: 0 },
    category: { type: String, required: true, trim: true, index: true },
    images: { type: [String], default: [] },
    active: { type: Boolean, default: true },
}, { timestamps: true });
productSchema.index({ name: "text", description: "text" });
exports.Product = (0, mongoose_1.model)("Product", productSchema);
//# sourceMappingURL=Product.js.map