import { Request, Response, NextFunction } from "express";
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
export declare function authenticate(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
export declare function requireAdmin(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=jwt.middleware.d.ts.map