import { Router } from "express";
import { authorizeRoles, isLoggedIn } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";
import {
  getAllExcelFiles,
  getExcelFileById,
  deleteExcelFileById,
  uploadExcel,
} from "../controllers/upload.controller.js";
import validateObjectId from "../middlewares/validateObjectId.middleware.js";
import { userLimiter } from "../middlewares/rateLimiter.middleware.js";

const router = Router();

// Excel file routes
router
  .route("/")
  .get(userLimiter, getAllExcelFiles) // anyone can fetch metadata
  .post(userLimiter, isLoggedIn, authorizeRoles("ADMIN"), upload.single("excel"), uploadExcel);

router
  .route("/:id")
  .get(userLimiter, isLoggedIn, validateObjectId, getExcelFileById)
  .delete(userLimiter, isLoggedIn,  authorizeRoles("ADMIN"), validateObjectId, deleteExcelFileById);

export default router;
