
import mongoose from "mongoose";

const userOrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      qty: Number
    }
  ],
  status: { type: String, default: "pending" }
}, { timestamps: true });

export default mongoose.model("UserOrder", userOrderSchema);
