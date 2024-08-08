const mongoose = require("mongoose");

const loginDataSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
  mobileno: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Logindata = mongoose.model("LoginData", loginDataSchema);

module.exports = Logindata;
