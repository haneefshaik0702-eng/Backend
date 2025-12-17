import express from "express";
import {
  createSubcategory,
  getSubcategoriesByCategory
} from "../controllers/subcategoryController.js"; // match filename & export exactly

const router = express.Router();

// Create subcategory
router.post("/", createSubcategory);

// Get subcategories by category
router.get("/", getSubcategoriesByCategory);

export default router;
