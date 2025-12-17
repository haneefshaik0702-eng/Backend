import express from "express";
import {
  createCategory,
  getCategoriesByVendor
} from "../controllers/categoryController.js";

const router = express.Router();

router.post("/", createCategory);
router.get("/", getCategoriesByVendor); // ✅ IMPORTANT

export default router;
