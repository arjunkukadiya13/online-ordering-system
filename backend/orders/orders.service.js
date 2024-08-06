const OrderModel = require("../orders/orders.model"); // Update the path as needed

exports.createOrder = async (user_id, item_id, time, status) => {
  const order = new OrderModel({
    user_id,
    item_id,
    time,
    status,
  });
  return await order.save();
};

exports.findAllOrders = async () => {
  return await OrderModel.find().populate('user_id').populate('item_id'); // Populate references if needed
};

exports.findOrdersByUserId = async (user_id) => {
  return await OrderModel.find({ user_id }).populate('item_id');
};

exports.findOrderById = async (id) => {
  return await OrderModel.findById(id).populate('user_id').populate('item_id');
};

exports.updateOrder = async (id, updateData) => {
  return await OrderModel.findByIdAndUpdate(id, updateData, {
    new: true, // Return the modified document rather than the original
    runValidators: true, // Validate the update according to the schema
  });
};

exports.deleteOrder = async (id) => {
  return await OrderModel.findByIdAndRemove(id);
};
