import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const filter = {};

    // category filter
    if (req.query.category) {
      filter.category = req.query.category;
    }

    // vendor filter (future use)
    if (req.query.vendor) {
      filter.vendor = req.query.vendor;
    }

    const products = await Product.find(filter)
      .populate("vendor", "name")
      .populate("category", "name")
      .populate("subcategory", "name");

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Failed to load products" });
  }
};
