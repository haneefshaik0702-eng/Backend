import Category from "../models/Category.js";

// CREATE category
export const createCategory = async (req, res) => {
  try {
    const category = await Category.create({
      name: req.body.name,
      vendor: req.body.vendor
    });
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ message: "Failed to create category" });
  }
};

// ✅ GET categories by vendor (QUERY)
export const getCategoriesByVendor = async (req, res) => {
  try {
    const { vendor } = req.query;

    if (!vendor) {
      return res.status(400).json({ message: "vendor id required" });
    }

    const categories = await Category.find({ vendor });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: "Failed to load categories" });
  }
};
