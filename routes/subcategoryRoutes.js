import express from "express";
import {
  createSubCategory,
  getSubCategoriesByCategory
} from "../controllers/subCategoryController.js";

const router = express.Router();

router.post("/", createSubCategory);

// ✅ ADD THIS
router.get("/", getSubCategoriesByCategory);

export default router;
