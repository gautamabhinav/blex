import { Router } from 'express';
import { isLoggedIn, authorizeRoles } from '../middlewares/auth.middleware.js';
import { createNotification, getNotificationsForUser, markAsRead, listNotifications } from '../controllers/notification.controller.js';
import { ipLimiter } from '../middlewares/rateLimiter.middleware.js';

const router = Router();

// User endpoints
router.get('/', ipLimiter, isLoggedIn, getNotificationsForUser);
router.post('/:id/read', ipLimiter, isLoggedIn, markAsRead);

// Admin endpoints
router.post('/', ipLimiter, isLoggedIn, authorizeRoles('ADMIN', 'SUPERADMIN'), createNotification);
router.get('/all', ipLimiter, isLoggedIn, authorizeRoles('ADMIN', 'SUPERADMIN'), listNotifications);

export default router;
