import Product from "../models/Product.js";

// GET /api/products?subcategory=ID
export const getProducts = async (req, res) => {
  try {
    const { subcategory } = req.query;

    // Only return products for the requested subcategory
    const filter = subcategory ? { subcategory } : {};
    const products = await Product.find(filter)
      .populate("subcategory", "name"); // optional: populate subcategory name

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
