import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create({
      name: req.body.name,
      price: req.body.price,
      vendor: req.body.vendor,
      category: req.body.category,
      subcategory: req.body.subcategory,
      image: req.body.image,
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
