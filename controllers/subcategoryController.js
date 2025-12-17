import Subcategory from "../models/Subcategory.js";

// CREATE subcategory
export const createSubcategory = async (req, res) => {
  try {
    const subcategory = await Subcategory.create({
      name: req.body.name,
      category: req.body.category
    });
    res.status(201).json(subcategory);
  } catch (err) {
    res.status(500).json({ message: "Failed to create subcategory", error: err.message });
  }
};

// GET subcategories by category (QUERY)
export const getSubcategoriesByCategory = async (req, res) => {
  try {
    const { category } = req.query;

    if (!category) {
      return res.status(400).json({ message: "category id required" });
    }

    const subcategories = await Subcategory.find({ category });
    res.json(subcategories);
  } catch (err) {
    res.status(500).json({ message: "Failed to load subcategories", error: err.message });
  }
};
