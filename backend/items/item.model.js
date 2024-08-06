const mongoose = require("mongoose");

const itemDataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model("ItemData", itemDataSchema);

module.exports = Item;
