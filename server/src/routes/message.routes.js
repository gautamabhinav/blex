import express from "express";
import {
  getAllContacts,
  getChatPartners,
  getMessagesByUserId,
  sendMessage,
} from "../src/controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";
import { ipLimiter } from "../middlewares/rateLimiter.middleware.js";

const router = express.Router();

// the middlewares execute in order - so requests get rate-limited first, then authenticated.
// this is actually more efficient since unauthenticated requests get blocked by rate limiting before hitting the auth middleware.
router.use(arcjetProtection, protectRoute);

router.get("/contacts", ipLimiter, getAllContacts);
router.get("/chats", ipLimiter, getChatPartners);
router.get("/:id", ipLimiter, getMessagesByUserId);
router.post("/send/:id", ipLimiter, sendMessage);

export default router;
