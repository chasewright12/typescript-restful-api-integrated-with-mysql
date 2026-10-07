import { NextFunction, Request, Response } from 'express';
import { AppError } from '../server/http/app_error.utils';
declare const errorHandler: (err: AppError, req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export default errorHandler;
//# sourceMappingURL=errorHandler.middleware.d.ts.map