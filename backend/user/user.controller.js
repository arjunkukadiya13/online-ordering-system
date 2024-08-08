const userService = require("../user/user.service");

exports.create = async (req, res) => {
  const {  email, password, mobileno } = req.body;
  if (  !email || !password || !mobileno) {
    return res.status(400).json({ message: "Required fields are missing" });
  }

  try {
    const user = await userService.createUser( email, password, mobileno);
    res.status(201).json({ message: "User added successfully", user });
  } catch (err) {
    console.error("Error creating User:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.findAll = async (req, res) => {
  try {
    const users = await userService.findAllUsers();
    res.send({ message: "User data", users });
  } catch (err) {
    console.error("Error fetching Users:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.findById = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const user = await userService.findUserById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.send({ message: "User data", user });
  } catch (err) {
    console.error("Error fetching User by ID:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  if (!id) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const updatedUser = await userService.updateUser(id, updateData);
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.send({ message: "User updated successfully", updatedUser });
  } catch (err) {
    console.error("Error updating User:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const result = await userService.deleteUser(id);
    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }
    res.send({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Error deleting User:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// New function for user authentication
exports.authenticate = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "email and password are required" });
  }

  try {
    const user = await userService.authenticateUser(email, password);
    res.send({ message: "Authentication successful", status:200 });
  } catch (err) {
    console.error("Error authenticating User:", err);
    res.status(401).json({ error: "Authentication failed" });
  }
};
