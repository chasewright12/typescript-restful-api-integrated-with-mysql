// Config database files
import * as pool from '../config/database';
import { RowDataPacket } from 'mysql2';

// Define the Product interface
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