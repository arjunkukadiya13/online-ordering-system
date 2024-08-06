const mongoose = require("mongoose");

const orderDataSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LoginData',
    required: true,
  },
  item_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ItemData',
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
  status:{
    type:String,
    default:'Pending'
  }
});

var order = new mongoose.model("OrderData", schema);
module.exports = order;
