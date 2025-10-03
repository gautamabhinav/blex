import { Router } from 'express';
import { isLoggedIn, authorizeRoles } from '../middlewares/auth.middleware.js';

import { ipLimiter } from '../middlewares/rateLimiter.middleware.js';
import { addCommentToPost, createComment, deleteComment, getAllComments, getCommentById, getCommentsForPost, updateComment } from '../controllers/comment.controller.js';


const router = Router();

// Admin routes for managing comments
router
  .route('/')
  .get(ipLimiter, getAllComments)
  .post(ipLimiter, isLoggedIn, authorizeRoles('ADMIN', 'SUPERADMIN'), createComment);

router
  .route('/:id')
  .get(ipLimiter, getCommentById)
  .put(ipLimiter, isLoggedIn, authorizeRoles('ADMIN', 'SUPERADMIN'), updateComment)
  .delete(ipLimiter, isLoggedIn, authorizeRoles('ADMIN', 'SUPERADMIN'), deleteComment);

// Public routes for comments on posts
router
  .route('/posts/:blogId')
  .get(ipLimiter, getCommentsForPost)            // Get all comments for a post
  .post(ipLimiter, isLoggedIn, addCommentToPost); // Add a comment to a post as a logged-in user

export default router;
