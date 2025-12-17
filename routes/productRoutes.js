import express from "express";
import {
  createProduct,
  getProducts
} from "../controllers/productController.js";

const router = express.Router();

// CREATE PRODUCT
router.post("/", createProduct);

// GET PRODUCTS (filters)
router.get("/", getProducts);

export default router;
