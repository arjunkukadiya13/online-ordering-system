const orderService = require("../orders/orders.service");

exports.create = async (req, res) => {
  const { user_id, item_id, time, status } = req.body;
  if (!user_id || !item_id || !status) {
    return res.status(400).json({ message: "Required fields are missing" });
  }

  try {
    const order = await orderService.createOrder(user_id, item_id, time, status);
    res.status(201).json({ message: "Order created successfully", order });
  } catch (err) {
    console.error("Error creating Order:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.findAll = async (req, res) => {
  try {
    const orders = await orderService.findAllOrders();
    res.send({ message: "Order data", orders });
  } catch (err) {
    console.error("Error fetching Orders:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.findByUserId = async (req, res) => {
  const { user_id } = req.params;
  if (!user_id) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const orders = await orderService.findOrdersByUserId(user_id);
    res.send({ message: "Orders for user", orders });
  } catch (err) {
    console.error("Error fetching Orders by User ID:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.findById = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Order ID is required" });
  }

  try {
    const order = await orderService.findOrderById(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.send({ message: "Order data", order });
  } catch (err) {
    console.error("Error fetching Order by ID:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  if (!id) {
    return res.status(400).json({ message: "Order ID is required" });
  }

  try {
    const updatedOrder = await orderService.updateOrder(id, updateData);
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.send({ message: "Order updated successfully", updatedOrder });
  } catch (err) {
    console.error("Error updating Order:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Order ID is required" });
  }

  try {
    const result = await orderService.deleteOrder(id);
    if (!result) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.send({ message: "Order deleted successfully" });
  } catch (err) {
    console.error("Error deleting Order:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
