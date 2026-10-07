import { Schema, InferSchemaType, HydratedDocument } from "mongoose";
declare const productSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    name: string;
    description?: string | null;
    price: number;
    stock: number;
    category: string;
    images: string[];
    active: boolean;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    name: string;
    description?: string | null;
    price: number;
    stock: number;
    category: string;
    images: string[];
    active: boolean;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, Omit<import("mongoose").DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    name: string;
    description?: string | null;
    price: number;
    stock: number;
    category: string;
    images: string[];
    active: boolean;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    name: string;
    description?: string | null;
    price: number;
    stock: number;
    category: string;
    images: string[];
    active: boolean;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type ProductType = InferSchemaType<typeof productSchema>;
export type ProductDocument = HydratedDocument<ProductType>;
export declare const Product: import("mongoose").Model<{
    name: string;
    description?: string | null;
    price: number;
    stock: number;
    category: string;
    images: string[];
    active: boolean;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    name: string;
    description?: string | null;
    price: number;
    stock: number;
    category: string;
    images: string[];
    active: boolean;
} & import("mongoose").DefaultTimestampProps, {}, import("mongoose").DefaultSchemaOptions> & {
    name: string;
    description?: string | null;
    price: number;
    stock: number;
    category: string;
    images: string[];
    active: boolean;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, {
    name: string;
    description?: string | null;
    price: number;
    stock: number;
    category: string;
    images: string[];
    active: boolean;
} & import("mongoose").DefaultTimestampProps>;
export {};
//# sourceMappingURL=Product.d.ts.map