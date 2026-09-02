import { RowDataPacket } from 'mysql2';
interface Product extends RowDataPacket {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
}
export default Product;
//# sourceMappingURL=Product.d.ts.map