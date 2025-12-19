import express from "express";
import { getSubcategories } from "../controllers/subcategoryController.js";

const router = express.Router();

router.get("/", getSubcategories); // ?category=CATEGORY_ID

export default router;
