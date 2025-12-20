import express from "express";
import Subcategory from "../models/Subcategory.js";
import { protectAdmin } from "../middleware/adminMiddleware.js";

const router = express.Router();

router.post("/", protectAdmin, async (req, res) => {
  const { name, category } = req.body;
  const subcategory = new Subcategory({ name, category });
  await subcategory.save();
  res.json(subcategory);
});

router.get("/", async (req, res) => {
  const { category } = req.query;
  const filter = category ? { category } : {};
  const subcategories = await Subcategory.find(filter);
  res.json(subcategories);
});

export default router;
