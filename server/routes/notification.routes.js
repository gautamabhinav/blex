import { Router } from 'express';
import { isLoggedIn, authorizeRoles } from '../middlewares/auth.middleware.js';
import { createNotification, getNotificationsForUser, markAsRead, listNotifications } from '../controllers/notification.controller.js';
import { userLimiter } from '../middlewares/rateLimiter.middleware.js';

const router = Router();

// User endpoints
router.get('/', userLimiter, isLoggedIn, getNotificationsForUser);
router.post('/:id/read', userLimiter, isLoggedIn, markAsRead);

// Admin endpoints
router.post('/', userLimiter, isLoggedIn, authorizeRoles('ADMIN', 'SUPERADMIN'), createNotification);
router.get('/all', userLimiter, isLoggedIn, authorizeRoles('ADMIN', 'SUPERADMIN'), listNotifications);

export default router;
