
const item = require("./items/item.controller"); // Updated to match your item controller file
const user = require("./user/user.controller");
const order = require("./orders/orders.controller"); // Added for OrderData
const express = require("express");
const router = express.Router();

// Item routes (updated from product)
router.post("/item", item.create); // Changed from /product to /item
router.get("/item", item.findAll); // Changed from /product to /item

// User routes
router.post("/user", user.create);
router.get("/user", user.findAll);
router.get("/user/:id", user.findById); // Added route to fetch user by ID
router.put("/user/:id", user.update); // Added route to update user by ID
router.delete("/user/:id", user.delete); // Added route to delete user by ID
router.post("/auth", user.authenticate);; // Authenticate user

// Order routes (added for OrderData)
router.post("/order", order.create); // Added route for creating an order
router.get("/order", order.findAll); // Added route for fetching all orders
router.get("/order/user/:user_id", order.findByUserId); // Added route for fetching orders by user ID
router.get("/order/:id", order.findById); // Added route for fetching order by ID
router.put("/order/:id", order.update); // Added route for updating order by ID
router.delete("/order/:id", order.delete); // Added route for deleting order by ID

module.exports = router;
