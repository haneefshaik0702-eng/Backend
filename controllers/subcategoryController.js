import Subcategory from "../models/Subcategory.js";

export const getSubcategories = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const subcategories = await Subcategory.find(filter);
    res.json(subcategories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
