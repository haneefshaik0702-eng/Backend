import Category from "../models/Category.js";

export const getCategories = async (req, res) => {
  try {
    const { vendor } = req.query;
    const filter = vendor ? { vendor } : {};
    const categories = await Category.find(filter);
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
