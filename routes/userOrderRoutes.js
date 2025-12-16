
import express from "express";
import { createUserOrder, getUserOrders } from "../controllers/userOrderController.js";
import { userAuth } from "../middleware/userAuth.js";

const router = express.Router();
router.post("/orders", userAuth, createUserOrder);
router.get("/orders", userAuth, getUserOrders);
export default router;
