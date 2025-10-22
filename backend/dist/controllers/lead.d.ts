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
 * Create a new lead from a buyer's inquiry
 * @route POST /api/leads
 * @access Public
 */
export declare const createLead: (req: Request, res: Response, next: NextFunction) => void;
/**
 * GET /api/leads/mylistings
 * Requires: Agent role
 * Retrieves all leads for the authenticated Agent's listings.
 */
/**
 * Get all leads for the authenticated agent's listings
 * @route GET /api/leads/mylistings
 * @access Private/Agent
 */
export declare const getAgentLeads: (req: Request, res: Response, next: NextFunction) => void;
/**
 * PATCH /api/leads/:id
 * Requires: Agent/Admin role (to update status)
 * Updates the status of a specific lead (e.g., from New to Contacted).
 */
/**
 * Update lead status
 * @route PATCH /api/leads/:id
 * @access Private/Agent,Admin
 */
export declare const updateLeadStatus: (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=lead.d.ts.map