// import express from 'express';
// import { isLoggedIn } from '../middlewares/auth.middleware.js';
// import { addcomment, deleteComment, getCommentsForPost, updateComment } from '../controllers/post.controller.js';
// import { addcomment, getAllComments } from '../controllers/comment.controller.js';

// const router = express.Router();

// router.post('/', isLoggedIn, addcomment);
// router.get('/', isLoggedIn, getAllComments);
// router.get('/:id', isLoggedIn, getCommentsForPost);
// router.delete('/:id', isLoggedIn, deleteComment);
// router.put('/:id', isLoggedIn, updateComment);

// export default router;



// import { Router } from 'express';
// import { authorizeRoles, isLoggedIn } from '../middlewares/auth.middleware.js';
// import {  createComment, deleteComment, updateComment, getAllComments, getCommentbyid } from '../controllers/comment.controller.js';
// import upload from '../middlewares/multer.middleware.js';

// const router = Router();


// // blog post routes

// router
//     .route('/')
//     .get(getAllComments)
//     .post(upload.single('thumbnail'), isLoggedIn, authorizeRoles('ADMIN', 'SUPERADMIN'), createComment);


// router
//     .route('/:id')
//     .get(isLoggedIn, getCommentbyid)
//     .put(isLoggedIn, isLoggedIn, authorizeRoles('ADMIN', 'SUPERADMIN'), upload.single('thumbnail'), updateComment)
//     .delete(isLoggedIn, deleteComment);
//     // .delete(isLoggedIn, deleteComment);

// // router
// //     .route('/:id/comments')
// //     .get(getCommentsForPost)
// //     .post(isLoggedIn, upload.single('thumbnail'), addComment)
// //     .put(isLoggedIn, upload.single('thumbnail'), updateComment);


// export default router;



import { Router } from 'express';
import { isLoggedIn, authorizeRoles } from '../middlewares/auth.middleware.js';
import {
  createComment,
  deleteComment,
  updateComment,
  getAllComments,
  getCommentById,
  getCommentsForPost,
  addCommentToPost,
} from '../controllers/comment.controller.js';
import { userLimiter } from '../middlewares/ratelimiter.middleware.js';

const router = Router();

// Admin routes for managing comments
router
  .route('/')
  .get(userLimiter, getAllComments)
  .post(userLimiter, isLoggedIn, authorizeRoles('ADMIN', 'SUPERADMIN'), createComment);

router
  .route('/:id')
  .get(userLimiter, getCommentById)
  .put(userLimiter, isLoggedIn, authorizeRoles('ADMIN', 'SUPERADMIN'), updateComment)
  .delete(userLimiter, isLoggedIn, authorizeRoles('ADMIN', 'SUPERADMIN'), deleteComment);

// Public routes for comments on posts
router
  .route('/posts/:blogId')
  .get(userLimiter, getCommentsForPost)            // Get all comments for a post
  .post(userLimiter, isLoggedIn, addCommentToPost); // Add a comment to a post as a logged-in user

export default router;
