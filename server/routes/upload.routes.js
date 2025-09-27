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

const router = Router();

// Excel file routes
router
  .route("/")
  .get(getAllExcelFiles) // anyone can fetch metadata
  .post(isLoggedIn, authorizeRoles("ADMIN"), upload.single("excel"), uploadExcel);

router
  .route("/:id")
  .get(isLoggedIn, validateObjectId, getExcelFileById)
  .delete(isLoggedIn, authorizeRoles("ADMIN"), validateObjectId, deleteExcelFileById);

export default router;
