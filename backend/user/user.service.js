const bcrypt = require('bcrypt');
const UserModel = require("../user/user.model");

// Utility function to hash passwords
const hashPassword = async (password) => {
  const saltRounds = 10; // Number of salt rounds
  return await bcrypt.hash(password, saltRounds);
};
const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};
exports.createUser = async (username, email, password, mobileno) => {
  const status = "active";
  const verified = false;

  // Hash the password before saving
  const hashedPassword = await hashPassword(password);

  const user = new UserModel({
    username,
    email,
    password: hashedPassword,
    mobileno,
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
  // If password is included in updateData, hash it before updating
  if (updateData.password) {
    updateData.password = await hashPassword(updateData.password);
  }

  return await UserModel.findByIdAndUpdate(id, updateData, {
    new: true, // Return the updated document
    runValidators: true, // Validate the update according to the schema
  });
};

exports.deleteUser = async (id) => {
  return await UserModel.findByIdAndRemove(id);
};

exports.authenticateUser = async (username, password) => {
  const user = await UserModel.findOne({ username });
  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  return user;
};
