import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const { vendor, category, subcategory } = req.query;

    const filter = {};
    if (vendor) filter.vendor = vendor;
    if (category) filter.category = category;
    if (subcategory) filter.subcategory = subcategory;

    const products = await Product.find(filter)
      .populate("vendor", "name")
      .populate("category", "name")
      .populate("subcategory", "name");

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
