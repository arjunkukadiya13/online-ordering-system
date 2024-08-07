// src/context/CartContext.js

import React, { createContext, useState, useContext } from 'react';

// Create the CartContext
const CartContext = createContext();

// Create a custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider component to wrap the app and provide cart state
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (item) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
