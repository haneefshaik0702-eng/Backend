import express from "express";
import Folder from "../models/Folder.js";

const router = express.Router();

// Create folder (admin)
router.post("/", async (req, res) => {
  try {
    const folder = await Folder.create(req.body);
    res.json(folder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all folders (user)
router.get("/", async (req, res) => {
  const folders = await Folder.find();
  res.json(folders);
});

export default router;
