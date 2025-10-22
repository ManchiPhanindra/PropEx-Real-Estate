import mongoose, { Document, Types } from 'mongoose';
export interface ILead extends Document {
    listing: Types.ObjectId;
    name: string;
    email: string;
    phone?: string;
    message: string;
    status: 'New' | 'Contacted' | 'Converted' | 'Closed';
    createdAt: Date;
    updatedAt: Date;
}
export declare const Lead: mongoose.Model<ILead, {}, {}, {}, mongoose.Document<unknown, {}, ILead, {}, {}> & ILead & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=Lead.d.ts.map