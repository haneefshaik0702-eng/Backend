import Vendor from "../models/Vendor.js";

export const getVendors = async (req, res) => {
  try {
    const { folder } = req.query;
    const filter = folder ? { folder } : {};
    const vendors = await Vendor.find(filter);
    res.json(vendors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
