import Vendor from "../models/Vendor.js";

export const createVendor = async (req, res) => {
  try {
    const vendor = await Vendor.create(req.body);
    res.json(vendor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getVendors = async (req, res) => {
  try {
    const filter = {};
    if (req.query.folder) filter.folder = req.query.folder;

    const vendors = await Vendor.find(filter);
    res.json(vendors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
