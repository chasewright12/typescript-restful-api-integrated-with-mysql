import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

declare module 'jsonwebtoken';

export interface AutenticatedRequest extends Request {
    user?: JwtPayload | string;
}

const JWT_SECRET: string = process.env.JWT_SECRET || 'your_secret_key';

export function authMiddleware(
    req: AutenticatedRequest,
    res: Response,
    next: NextFunction):void {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            res.status(401).json({ message: 'Authorization header missing or invalid'});
            return;
        }

        const token = authHeader.split(' ')[1];

        if (!token) {
            res.status(401).json({ message: 'Authorization token missing'});
            return;
        }

        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            req.user = decoded;
            next();
        } catch (error) {
            res.status(401).json({ message: 'Invalid or expired token'});
            return;
        }

        res.status(401).json({ message: 'Authorization header missing or invalid' });
    }
