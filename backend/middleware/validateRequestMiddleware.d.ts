import { NextFunction, Request, Response } from 'express';
import { ZodType } from 'zod';
declare const validateRequest: (schema: ZodType) => (req: Request, res: Response, next: NextFunction) => void;
export default validateRequest;
//# sourceMappingURL=validateRequestMiddleware.d.ts.map