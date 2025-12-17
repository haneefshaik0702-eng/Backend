
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import userOrderRoutes from "./routes/userOrderRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import folderRoutes from "./routes/folderRoutes.js";
import vendorRoutes from "./routes/vendorRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/user", userOrderRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/folders", folderRoutes);
app.use("/api/vendors", vendorRoutes);

app.listen(process.env.PORT, () =>
  console.log("Server running on", process.env.PORT)
);
