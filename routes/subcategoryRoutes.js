import express from "express";
import {
  createSubcategory,
  getSubcategoriesByCategory
} from "../controllers/subcategoryController.js";

const router = express.Router();

router.post("/", createSubcategory);
router.get("/:categoryId", getSubcategoriesByCategory);

export default router;
