import { Router } from "express";
import { getsummary } from "../controllers/summary.controller.js";
const router = Router();

router
    .route('/')
    .post(getsummary);    

export default router;