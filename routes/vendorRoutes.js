import express from "express";
import Vendor from "../models/Vendor.js";

const router = express.Router();

// Create vendor (admin)
router.post("/", async (req, res) => {
  try {
    const vendor = await Vendor.create(req.body);
    res.json(vendor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get vendors by folder (user)
router.get("/", async (req, res) => {
  const { folder } = req.query;
  const vendors = await Vendor.find({ folder });
  res.json(vendors);
});

export default router;
