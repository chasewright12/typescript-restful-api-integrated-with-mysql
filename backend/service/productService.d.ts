export declare const list: (page: number, limit: number, category?: string, search?: string) => Promise<{
    items: ({
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
    })[];
    total: number;
    page: number;
    pages: number;
}>;
export declare const findById: (id: string) => import("mongoose").Query<({
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
}) | null, import("mongoose").Document<unknown, {}, {
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
}, {}, {
    name: string;
    description?: string | null;
    price: number;
    stock: number;
    category: string;
    images: string[];
    active: boolean;
} & import("mongoose").DefaultTimestampProps, "findOne", {}>;
//# sourceMappingURL=productService.d.ts.map