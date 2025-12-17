import express from "express";
import {
  createCategory,
  getCategories,
} from "../controllers/categoryController.js";

const router = express.Router();

// ✅ CREATE category
router.post("/", createCategory);

// ✅ GET categories
router.get("/", getCategories);

export default router;
