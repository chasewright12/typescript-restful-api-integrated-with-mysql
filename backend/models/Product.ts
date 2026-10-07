import { Schema, model, InferSchemaType, HydratedDocument } from "mongoose";

const productSchema = new Schema(
    {
        name: { type: String, required: true, trim: true, minlength: 2, maxlength: 120 },
        description: { type: String, trim: true, maxlength: 2000 },
        price: { type: Number, required: true, min: 0 },
        stock: { type: Number, required: true, min: 0, default: 0 },
        category: { type: String, required: true, trim: true, index: true },
        images: { type: [String], default: [] },
        active: { type: Boolean, default: true },
    },
    { timestamps: true }
);

productSchema.index({ name: "text", description: "text" });

export type ProductType = InferSchemaType<typeof productSchema>;
export type ProductDocument = HydratedDocument<ProductType>;

export const Product = model<ProductType>("Product", productSchema);