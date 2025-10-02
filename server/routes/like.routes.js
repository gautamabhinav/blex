import { Router } from "express";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import { getLikesCount, getUserLikeStatus, likePost, unlikePost, getUserLikeStatusAuth } from "../controllers/like.controller.js";
import { getLikesUsers } from "../controllers/like.controller.js";

const router = Router();

// Like routes
router
  .route("/:postId/like")
  .post(isLoggedIn, likePost)     // like a post
  .delete(isLoggedIn, unlikePost); // unlike a post

router
  .route("/:postId/likes")
  .get(getLikesCount); // get total like count for a post

router
  .route("/:postId/likes/:userId")
  .get(getUserLikeStatus); // check if a user liked the post

// Authenticated user's like status
router.route('/:postId/status').get(isLoggedIn, getUserLikeStatusAuth);

router.route('/:postId/users').get(getLikesUsers);

export default router;
