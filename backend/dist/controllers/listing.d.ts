import { Request, Response, NextFunction } from 'express';
import { IUser } from '../models/User.js';
import { Types } from 'mongoose';
declare module 'express-serve-static-core' {
    interface Request {
        user?: IUser & {
            _id: Types.ObjectId;
        };
    }
}
/**
 * @desc    Get all listings for the currently logged-in agent
 * @route   GET /api/listings/agent/my-listings
 * @access  Private/Agent
 */
export declare const getAgentListings: (req: Request, res: Response, next: NextFunction) => void;
/**
 * POST /api/listings
 * Creates a new property listing and uploads images to Cloudinary.
 */
export declare const createListing: (req: Request, res: Response, next: NextFunction) => void;
/**
 * PATCH /api/listings/:id
 * Updates listing details (only owner or Admin).
 */
export declare const updateListing: (req: Request, res: Response, next: NextFunction) => void;
/**
 * DELETE /api/listings/:id
 * Removes a listing and all associated images from Cloudinary.
 */
export declare const deleteListing: (req: Request, res: Response, next: NextFunction) => void;
/**
 * GET /api/listings
 * Public access. Implements search, filtering, and pagination.
 */
export declare const getAllListings: (req: Request, res: Response, next: NextFunction) => void;
/**
 * GET /api/listings/:id
 * Public access. Retrieves a single listing and increments view count.
 */
export declare const getListingById: (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=listing.d.ts.map