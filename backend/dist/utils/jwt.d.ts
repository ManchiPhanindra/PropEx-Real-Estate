import { IUser } from '../models/User.js';
export interface TokenPayload {
    id: string;
    email: string;
    role: IUser['role'];
    firstName: string;
    lastName: string;
    iat?: number;
    exp?: number;
    [key: string]: any;
}
export declare const signToken: (user: any) => string;
//# sourceMappingURL=jwt.d.ts.map