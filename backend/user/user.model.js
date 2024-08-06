const mongoose = require("mongoose");

const loginDataSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
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

const Logindata = mongoose.model("LoginData", userSchema);

module.exports = Logindata;
