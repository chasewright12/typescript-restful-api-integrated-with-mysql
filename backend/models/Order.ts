import * as pool from '../config/database';
import { RowDataPacket } from 'mysql2';

interface Order extends RowDataPacket {
    id: string;
    userId: string;
    productId: string;
    quantity: number;
    totalPrice: number;
    status: 'pending' | 'completed' | 'cancelled';
    createdAt: Date;
    updatedAt: Date;
}

export default Order;

