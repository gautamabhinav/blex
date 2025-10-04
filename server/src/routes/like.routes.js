import { Router } from "express";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import { getLikesCount, getUserLikeStatus, likePost, unlikePost, getUserLikeStatusAuth } from "../controllers/like.controller.js";
import { getLikesUsers } from "../controllers/like.controller.js";
import { ipLimiter } from "../middlewares/rateLimiter.middleware.js";

const router = Router();

// Like routes
router
  .route("/:postId/like")
  .post(ipLimiter, isLoggedIn, likePost)     // like a post
  .delete(ipLimiter, isLoggedIn, unlikePost); // unlike a post

router
  .route("/:postId/likes")
  .get(ipLimiter, isLoggedIn, getLikesCount); // get total like count for a post

router
  .route("/:postId/likes/:userId")
  .get(ipLimiter, isLoggedIn, getUserLikeStatus); // check if a user liked the post

// Authenticated user's like status
router
  .route('/:postId/status')
  .get(ipLimiter, isLoggedIn, getUserLikeStatusAuth);

router
  .route('/:postId/users')
  .get(ipLimiter, isLoggedIn, getLikesUsers);

export default router;
