import Folder from "../models/Folder.js";

export const getFolders = async (req, res) => {
  try {
    const folders = await Folder.find({});
    res.json(folders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
