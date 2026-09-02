// Import necessary database modules and types
import pool from '../config/database';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

interface UserRow extends RowDataPacket {
    id: number;
    username: string;
    email: string;
    password: string;
}

class User {
    id: number;
    username: string;
    email: string;
    password: string;

    constructor(id: number, username: string, email: string, password: string) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static async create(username: string, email: string, password: string): Promise<User> {
        const [result] = await pool.execute<ResultSetHeader>(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            [username, email, password]
        );
        return new User(result.insertId, username, email, password);
    }

    static async findById(id: number): Promise<User | null> {
        const [rows] = await pool.execute<UserRow[]>(
            'SELECT * FROM users WHERE id = ?',
            [id.toString()]
        );

        if (!rows || rows.length === 0) {
            return null;
        }

        const row = rows[0] as UserRow;
        const { id: userId, username, email, password } = row;
        return new User(userId, username, email, password);
    }
}

export default User;