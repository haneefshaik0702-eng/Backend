import Subcategory from "../models/Subcategory.js";

// CREATE subcategory
export const createSubcategory = async (req, res) => {
  try {
    const subcategory = await Subcategory.create({
      name: req.body.name,
      category: req.body.category,
    });

    res.status(201).json(subcategory);
  } catch (error) {
    res.status(500).json({ message: "Failed to create subcategory" });
  }
};

// GET subcategories by category (QUERY PARAM)
export const getSubcategories = async (req, res) => {
  try {
    const { category } = req.query;

    if (!category) {
      return res.status(400).json({ message: "Category id required" });
    }

    const subcategories = await Subcategory.find({ category });
    res.json(subcategories);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch subcategories" });
  }
};
