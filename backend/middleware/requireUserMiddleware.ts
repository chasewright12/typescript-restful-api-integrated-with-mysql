import { NextFunction, Request, Response } from 'express';
import { HttpCode } from '../server/http/http-code.utils';
import { AppError } from '../server/http/app_error.utils';

const requireUser = (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user;

    if (!user) {
        return next(new AppError('Forbidden', HttpCode.Forbidden));
    }

    next();
};

export default requireUser;