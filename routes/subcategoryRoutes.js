import express from "express";
import {
  createSubcategory,
  getSubcategories,
} from "../controllers/subcategoryController.js";

const router = express.Router();

// CREATE
router.post("/", createSubcategory);

// READ by category
router.get("/", getSubcategories);

export default router;
