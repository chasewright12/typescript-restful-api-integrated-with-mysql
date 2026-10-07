import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "./jwt.utils";

export interface AuthPayload {
    sub: string;
    role: "user" | "admin";
    iat?: number;
    exp?: number;
}

declare global {
    namespace Express {
        interface Request {
            user?: AuthPayload;
        }
    }
}

export async function authenticate(req: Request, res: Response, next: NextFunction) {
    const header = req.headers.authorization;

    if (!header?.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Token não informado" });
    }

    const token = header.slice(7);
    const { valid, expired, decoded } = await verifyJwt(token);

    if (!valid || !decoded) {
        return res
            .status(401)
            .json({ message: expired ? "Token expirado" : "Token inválido" });
    }

    req.user = decoded as AuthPayload;
    next();
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
    if (req.user?.role !== "admin") {
        return res.status(403).json({ message: "Acesso restrito a administradores" });
    }
    next();
}