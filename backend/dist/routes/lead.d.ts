import { Types } from 'mongoose';
import { IUser } from '../models/User.js';
declare module 'express-serve-static-core' {
    interface Request {
        user?: IUser & {
            _id: Types.ObjectId;
        };
    }
}
declare const router: import("express-serve-static-core").Router;
export default router;
//# sourceMappingURL=lead.d.ts.map