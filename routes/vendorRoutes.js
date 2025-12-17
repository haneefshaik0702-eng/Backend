import express from "express";
import {
  createVendor,
  updateVendor,
  deleteVendor,
  getVendors,
  getCategoriesByVendor
} from "../controllers/vendorController.js";

const router = express.Router();

router.post("/", createVendor);
router.get("/", getVendors);
router.put("/:id", updateVendor);
router.delete("/:id", deleteVendor);

// VERY IMPORTANT
router.get("/:vendorId/categories", getCategoriesByVendor);

export default router;
