import express from 'express';
import { getTotals } from '../controllers/stats.controller.js';
import { ipLimiter } from '../middlewares/rateLimiter.middleware.js';

const router = express.Router();

// GET /api/v1/stats/totals
router.get('/totals', ipLimiter, getTotals);

export default router;
