import { IUser } from '../models/User.js';
import { Request, Response, NextFunction } from 'express';
import { Types } from 'mongoose';
declare module 'express-serve-static-core' {
    interface Request {
        user?: IUser & {
            _id: Types.ObjectId;
        };
    }
}
/**
 * 1. Protect Middleware: Checks for and verifies the JWT.
 */
export declare const protect: (req: Request, res: Response, next: NextFunction) => void;
/**
 * 2. Restrict To Middleware: Restricts access to specific roles.
 * @param roles Array of allowed roles (e.g., ['Admin', 'Agent'])
 */
export declare const restrictTo: (...roles: IUser["role"][]) => ((req: Request, res: Response, next: NextFunction) => void);
//# sourceMappingURL=auth.d.ts.map