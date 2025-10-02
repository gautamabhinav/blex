import { Router } from 'express';
import { authorizeRoles, isLoggedIn } from '../middlewares/auth.middleware.js';
import { addComment, createPost, deleteComment, deletePost, getAllPosts, getCommentsForPost, getPostbyid, updatePost, updateComment } from '../controllers/post.controller.js';
import upload from '../middlewares/multer.middleware.js';
import { userLimiter } from '../middlewares/ratelimiter.middleware.js';

const router = Router();


// blog post routes

router
    .route('/')
    .get(userLimiter, getAllPosts)
    .post(userLimiter, isLoggedIn, authorizeRoles('ADMIN', 'SUPERADMIN'), upload.single('thumbnail'), createPost);

router
    .route('/:id')
    .get(userLimiter, isLoggedIn, getPostbyid)
    .put(userLimiter, isLoggedIn, authorizeRoles('ADMIN', 'SUPERADMIN'), upload.single('thumbnail'), updatePost)
    .delete(userLimiter, isLoggedIn, authorizeRoles('ADMIN', 'SUPERADMIN'), deletePost)
    .delete(userLimiter, isLoggedIn, deleteComment);

router
    .route('/:id/comments')
    .get(userLimiter, getCommentsForPost)
    .post(userLimiter, isLoggedIn, upload.single('thumbnail'), addComment)
    .put(userLimiter, isLoggedIn, upload.single('thumbnail'), updateComment);


export default router;
