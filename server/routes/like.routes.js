import { Router } from "express";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import { getLikesCount, getUserLikeStatus, likePost, unlikePost, getUserLikeStatusAuth } from "../controllers/like.controller.js";
import { getLikesUsers } from "../controllers/like.controller.js";
import { userLimiter } from "../middlewares/ratelimiter.middleware.js";

const router = Router();

// Like routes
router
  .route("/:postId/like")
  .post(userLimiter, isLoggedIn, likePost)     // like a post
  .delete(userLimiter, isLoggedIn, unlikePost); // unlike a post

router
  .route("/:postId/likes")
  .get(userLimiter, getLikesCount); // get total like count for a post

router
  .route("/:postId/likes/:userId")
  .get(userLimiter, getUserLikeStatus); // check if a user liked the post

// Authenticated user's like status
router.route('/:postId/status').get(userLimiter, isLoggedIn, getUserLikeStatusAuth);

router.route('/:postId/users').get(userLimiter, getLikesUsers);

export default router;
