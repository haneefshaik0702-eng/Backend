import express from "express";
import { getCategories } from "../controllers/categoryController.js";

const router = express.Router();

router.get("/", getCategories); // ?vendor=VENDOR_ID

export default router;
