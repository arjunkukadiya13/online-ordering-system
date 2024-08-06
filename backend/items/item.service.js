const ItemModel = require("./item.model");

exports.createItem = async (title, description, weight, country, price, image) => {
  const item = new ItemModel({
    title,
    description,
    weight,
    country,
    price,
    image
  });
  return await item.save();
};

exports.findAllItems = async () => {
  return await ItemModel.find();
};

exports.findItemsByTitle = async (title) => {
  const condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } } // i means not case sensitive
    : {};
  return await ItemModel.find(condition);
};

exports.findItemById = async (id) => {
  return await ItemModel.findById(id);
};

exports.updateItem = async (id, updateData) => {
  return await ItemModel.findByIdAndUpdate(id, updateData, {
    new: true, // Return the modified document rather than the original
    runValidators: true, // Validate the update according to the schema
  });
};

exports.deleteItem = async (id) => {
  return await ItemModel.findByIdAndRemove(id);
};
