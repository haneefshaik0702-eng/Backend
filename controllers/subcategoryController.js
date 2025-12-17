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
    res.status(500).json({ message: "Failed to create subcategory" });
  }
};

// GET subcategories by category
export const getSubcategoriesByCategory = async (req, res) => {
  try {
    const subcategories = await Subcategory.find({
      category: req.params.categoryId
    });
    res.json(subcategories);
  } catch (err) {
    res.status(500).json({ message: "Failed to load subcategories" });
  }
};
