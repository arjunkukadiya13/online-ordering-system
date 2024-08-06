const UserModel = require("../user/user.model");

exports.createUser = async (username, email, password, mobileno) => {
  const status = "active";
  const verified = false;
  const user = new UserModel({
    username,
    email,
    password,
    mobileno,
    status,
    verified
  });
  return await user.save();
};

exports.findAllUsers = async () => {
  return await UserModel.find();
};

exports.findUserById = async (id) => {
  return await UserModel.findById(id);
};

exports.updateUser = async (id, updateData) => {
  return await UserModel.findByIdAndUpdate(id, updateData, {
    new: true, // Return the updated document
    runValidators: true, // Validate the update according to the schema
  });
};

exports.deleteUser = async (id) => {
  return await UserModel.findByIdAndRemove(id);
};
