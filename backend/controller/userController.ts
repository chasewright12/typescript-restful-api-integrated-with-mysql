import { Request, Response } from 'express';
import pool from '../config/database';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

interface UserRow extends RowDataPacket {
    id: number;
    name: string;
    email: string;
    password?: string;
    created_at: string;
}

class UserController {
    // GET /api/users
    async getUsers(req: Request, res: Response): Promise<void> {
        try {
            const [rows] = await pool.execute<UserRow[]>(
                'SELECT id, name, email, created_at FROM users',
                []
            );
            res.status(200).json(rows);
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            res.status(500).json({ message: 'Erro ao buscar usuários.' });
        }
    }

    // GET /api/users/:id
    async getUserById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            const [rows] = await pool.execute<UserRow[]>(
                'SELECT id, name, email, created_at FROM users WHERE id = ?',
                [Number(id)]
            );

            if (rows.length === 0) {
                res.status(404).json({ message: 'Usuário não encontrado.' });
                return;
            }

            res.status(200).json(rows[0]);
        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
            res.status(500).json({ message: 'Erro ao buscar usuário.' });
        }
    }

    // POST /api/users
    async createUser(req: Request, res: Response): Promise<void> {
        try {
            const { name, email, password } = req.body;

            if (!name || !email || !password) {
                res.status(400).json({ message: 'Nome, email e senha são obrigatórios.' });
                return;
            }

            const [result] = await pool.execute<ResultSetHeader>(
                'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
                [name, email, password] as any
            );

            res.status(201).json({ id: result.insertId, name, email });
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            res.status(500).json({ message: 'Erro ao criar usuário.' });
        }
    }

    // PUT /api/users/:id
    async updateUser(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { name, email } = req.body;

            const [result] = await pool.execute<ResultSetHeader>(
                'UPDATE users SET name = ?, email = ? WHERE id = ?',
                [name, email, id]
            );

            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Usuário não encontrado.' });
                return;
            }

            res.status(200).json({ id, name, email });
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
            res.status(500).json({ message: 'Erro ao atualizar usuário.' });
        }
    }

    // DELETE /api/users/:id
    async deleteUser(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            const [result] = await pool.execute<ResultSetHeader>(
                'DELETE FROM users WHERE id = ?',
                [Number(id)]
            );

            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Usuário não encontrado.' });
                return;
            }

            res.status(204).send();
        } catch (error) {
            console.error('Erro ao deletar usuário:', error);
            res.status(500).json({ message: 'Erro ao deletar usuário.' });
        }
    }
}

export default new UserController();