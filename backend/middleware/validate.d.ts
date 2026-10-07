import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";
interface Schemas {
    body?: ZodTypeAny;
    params?: ZodTypeAny;
    query?: ZodTypeAny;
}
export declare const validate: (schemas: Schemas) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export {};
//# sourceMappingURL=validate.d.ts.map