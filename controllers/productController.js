import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create({
      name: req.body.name,
      price: req.body.price,
      vendor: req.body.vendor,
      category: req.body.category,
      subcategory: req.body.subcategory,
      image: req.body.image || ""
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: "Failed to create product", error: err.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const filter = {};

    if (req.query.vendor) filter.vendor = req.query.vendor;
    if (req.query.category) filter.category = req.query.category;
    if (req.query.subcategory) filter.subcategory = req.query.subcategory;

    const products = await Product.find(filter);
    res.json(products);
  } catch {
    res.status(500).json({ message: "Failed to load products" });
  }
};
