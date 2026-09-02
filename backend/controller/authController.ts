import { Request, Response, NextFunction } from "express";
import { AuthService } from "../service/authService";

export class AuthController {
    constructor(private authService: AuthService) {}

    async register(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> {
        try {
            const { username, email, password } = req.body;
            const user = await this.authService.register(username, email, password);

            return res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    }
}