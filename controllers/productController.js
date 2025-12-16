import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const { category, vendor, subcategory } = req.query;

    const filter = {};
    if (category) filter.category = category;
    if (vendor) filter.vendor = vendor;
    if (subcategory) filter.subcategory = subcategory;

    const products = await Product.find(filter); // 🚨 NO populate

    res.json(products);
  } catch (err) {
    console.error("PRODUCT ERROR:", err);
    res.status(500).json({ message: "Failed to load products" });
  }
};
