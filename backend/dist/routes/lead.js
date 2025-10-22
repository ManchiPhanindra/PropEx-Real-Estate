// src/routes/lead.ts
import { Router } from 'express';
import { createLead, getAgentLeads, updateLeadStatus } from '../controllers/lead.js';
import { protect, restrictTo } from '../middleware/auth.js';
const router = Router();
/**
 * @route   POST /api/leads
 * @desc    Create a new lead from buyer inquiry
 * @access  Public
 */
router.post('/', createLead);
// Protect all routes after this middleware
router.use(protect);
/**
 * @route   GET /api/leads/mylistings
 * @desc    Get all leads for agent's listings
 * @access  Private/Agent
 */
router.get('/mylistings', restrictTo('Agent'), getAgentLeads);
/**
 * @route   PATCH /api/leads/:id
 * @desc    Update lead status
 * @access  Private/Agent,Admin
 */
router.patch('/:id', restrictTo('Agent', 'Admin'), updateLeadStatus);
export default router;
//# sourceMappingURL=lead.js.map