"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (schemas) => (req, res, next) => {
    for (const key of ["body", "params", "query"]) {
        const schema = schemas[key];
        if (!schema)
            continue;
        const result = schema.safeParse(req[key]);
        if (!result.success) {
            return res.status(400).json({ message: "Invalid Data", errors: result.error.flatten().fieldErrors, });
        }
        Object.assign(req[key], result.data);
    }
    next();
};
exports.validate = validate;
//# sourceMappingURL=validate.js.map