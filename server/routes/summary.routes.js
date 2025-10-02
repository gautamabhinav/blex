import { Router } from "express";
import { getsummary, getsummaryText } from "../controllers/summary.controller.js";
import { userLimiter } from "../middlewares/ratelimiter.middleware.js";
const router = Router();

router
    .route('/')
    .post(userLimiter, getsummary);    

router
    .route('/text')
    .post(userLimiter, getsummaryText);

export default router;