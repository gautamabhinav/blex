import { Router } from 'express';
import { authorizeRoles, isLoggedIn } from '../middlewares/auth.middleware.js';
import { addComment, createPost, deleteComment, deletePost, getAllPosts, getCommentsForPost, getPostbyid, updatePost, updateComment } from '../controllers/post.controller.js';
import upload from '../middlewares/multer.middleware.js';
import { ipLimiter } from '../middlewares/rateLimiter.middleware.js';

const router = Router();


// blog post routes

router
    .route('/')
    .get(ipLimiter, getAllPosts)
    .post(ipLimiter, isLoggedIn, authorizeRoles('ADMIN', 'SUPERADMIN'), upload.single('thumbnail'), createPost);

router
    .route('/:id')
    .get(ipLimiter, isLoggedIn, getPostbyid)
    .put(ipLimiter, isLoggedIn, authorizeRoles('ADMIN', 'SUPERADMIN'), upload.single('thumbnail'), updatePost)
    .delete(ipLimiter, isLoggedIn, authorizeRoles('ADMIN', 'SUPERADMIN'), deletePost)
    .delete(ipLimiter, isLoggedIn, deleteComment);

router
    .route('/:id/comments')
    .get(ipLimiter, getCommentsForPost)
    .post(ipLimiter, isLoggedIn, upload.single('thumbnail'), addComment)
    .put(ipLimiter, isLoggedIn, upload.single('thumbnail'), updateComment);


export default router;
