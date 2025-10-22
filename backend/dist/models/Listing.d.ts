import mongoose, { Document, Types } from 'mongoose';
export interface IImage {
    url: string;
    cloudinaryId: string;
    altText?: string;
    orderIndex: number;
}
export interface IListing extends Document {
    agent: Types.ObjectId;
    title: string;
    description: string;
    price: number;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    latitude: number;
    longitude: number;
    propertyType: 'House' | 'Condo' | 'Townhouse' | 'Land' | 'Apartment';
    bedrooms: number;
    bathrooms: number;
    sqFt: number;
    yearBuilt: number;
    status: 'Active' | 'Pending' | 'Sold' | 'Draft';
    images: IImage[];
    isFeatured: boolean;
    viewsCount: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Listing: mongoose.Model<IListing, {}, {}, {}, mongoose.Document<unknown, {}, IListing, {}, {}> & IListing & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=Listing.d.ts.map