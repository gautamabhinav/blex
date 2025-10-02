// routes/admin.routes.js
import express from 'express';
import { isAdminOrSuperAdmin, isLoggedIn } from '../middlewares/auth.middleware.js';
import { authorizeRoles } from '../middlewares/auth.middleware.js';
import { deleteUser, getAllUsers, updateUserRole } from '../controllers/admin.controller.js';
import { userLimiter } from '../middlewares/ratelimiter.middleware.js';
// import { getAllUsers, updateUserRole, deleteUser } from '../controllers/admin.controller.js';

const router = express.Router();

// Only ADMIN and SUPERADMIN can access these routes
router.use(isLoggedIn, authorizeRoles('ADMIN', 'SUPERADMIN'));
// router.put("/users/:id/role", isAdminOrSuperAdmin,

// Get all users
router.get('/users', userLimiter, getAllUsers);

// Update role
router.put('/users/:id/role', userLimiter, isAdminOrSuperAdmin, updateUserRole);

// Delete user
router.delete('/users/:id', userLimiter, deleteUser);

export default router;
