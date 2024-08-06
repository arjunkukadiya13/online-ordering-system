const itemService = require("./item.service");

exports.create = async (req, res) => {
  const { title, description, weight, country, price, image } = req.body;
  if (!title || !description || !weight || !country || !price || !image) {
    return res.status(400).json({ message: "Fields are empty" });
  }

  try {
    const item = await itemService.createItem(title, description, weight, country, price, image);
    res.status(201).json({ message: "Item added successfully", item });
  } catch (err) {
    console.error("Error creating Item:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.findAll = async (req, res) => {
  try {
    const items = await itemService.findAllItems();
    res.send({ message: "Item data", items });
  } catch (err) {
    console.error("Error fetching Items:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
