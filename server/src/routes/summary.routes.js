import { Router } from "express";
import { getsummary, getsummaryText } from "../controllers/summary.controller.js";
import { ipLimiter } from "../middlewares/rateLimiter.middleware.js";
const router = Router();

router
    .route('/')
    .post(ipLimiter, getsummary);    

router
    .route('/text')
    .post(ipLimiter, getsummaryText);

export default router;