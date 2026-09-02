import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';
declare module 'jsonwebtoken';
export interface AutenticatedRequest extends Request {
    user?: JwtPayload | string;
}
export declare function authMiddleware(req: AutenticatedRequest, res: Response, next: NextFunction): void;
//# sourceMappingURL=authMiddleware.d.ts.map