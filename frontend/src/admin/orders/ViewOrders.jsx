// ViewOrders.jsx

import React, { useState } from 'react';
import './ViewOrders.css';

const ViewOrders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: 'John Doe',
      items: [
        { name: 'Lemon Pepper Soup', price: 249.00 },
        { name: 'Burnt Garlic', price: 289.00 },
        { name: 'Corn Bean Pepper', price: 199.00 }
      ],
      status: 'Pending',
    },
    {
      id: 2,
      customer: 'Jane Smith',
      items: [
        { name: 'Burnt Garlic', price: 289.00 },
        { name: 'Corn Bean Pepper', price: 199.00 }
      ],
      status: 'Pending',
    },
  ]);

  // Function to change order status to 'Served'
  const serveOrder = (orderId) => {
    const updatedOrders = orders.map(order => 
      order.id === orderId ? { ...order, status: 'Served' } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div className="view-orders">
      <h2 className="section-title">View Orders</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>
                {order.items.map(item => (
                  <div key={item.name}>
                    {item.name} - ₹{item.price.toFixed(2)}
                  </div>
                ))}
              </td>
              <td>₹{order.items.reduce((total, item) => total + item.price, 0).toFixed(2)}</td>
              <td>{order.status}</td>
              <td>
                {order.status === 'Pending' ? (
                  <button
                    className="serve-button"
                    onClick={() => serveOrder(order.id)}
                  >
                    Serve
                  </button>
                ) : (
                  'Served'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewOrders;
