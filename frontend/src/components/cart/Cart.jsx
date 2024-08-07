// src/components/Cart.jsx

import React from 'react';
import './Cart.css';
import { useCart } from "./components/utils/CartContext"; // Import useCart hook

const Cart = () => {
  const { cartItems, removeFromCart } = useCart(); // Get cartItems and removeFromCart from context

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

  return (
    <div className="cart-container">
      <h2 className="section-title">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-price">₹{item.price}</span>
                  <button className="remove-button" onClick={() => removeFromCart(item)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
            <button className="order-button">Place Order</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
