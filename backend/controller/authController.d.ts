import { Request, Response, NextFunction } from "express";
import { AuthService } from "../service/authService";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
}
//# sourceMappingURL=authController.d.ts.map