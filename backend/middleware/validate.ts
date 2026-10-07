import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

interface Schemas {
    body?: ZodTypeAny;
    params?: ZodTypeAny;
    query?: ZodTypeAny;
}

export const validate = (schemas: Schemas) => (req: Request, res: Response, next: NextFunction) => {
    for (const key of ["body", "params", "query"] as const) {
        const schema = schemas[key];
        if (!schema) continue;

        const result = schema.safeParse(req[key]);
        if (!result.success) {
            return res.status(400).json({ message: "Invalid Data", errors: result.error.flatten().fieldErrors, });
        }
        Object.assign(req[key], result.data);
    }

    next();
};