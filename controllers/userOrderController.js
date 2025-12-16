
import UserOrder from "../models/UserOrder.js";

export const createUserOrder = async (req, res) => {
  const { products } = req.body;
  if (!products || !products.length)
    return res.status(400).json({ message: "Cart is empty" });

  const order = await UserOrder.create({
    user: req.user.id,
    products
  });

  res.json(order);
};

export const getUserOrders = async (req, res) => {
  const orders = await UserOrder.find({ user: req.user.id })
    .populate("products.product");
  res.json(orders);
};
