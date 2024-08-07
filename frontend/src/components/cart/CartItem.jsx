import React from "react";
import "./CartItem.css";

const CartItem = ({ item, onAddToCart }) => { // Accept onAddToCart as a prop
  const { name, country, image, weight, price, description } = item;

  // Function to handle click event on the Add button
  const handleAddClick = () => {
    onAddToCart(item);
  };

  return (
    <div className="menu-item">
      <img src={image} alt={name} className="menu-item-image" />
      <div className="menu-item-info">
        <h3 className="menu-item-title">
          {name} <span className="country">({country})</span>
        </h3>
        <p className="menu-item-weight">({weight})</p>
        <p className="menu-item-description">{description}</p>
        <div className="menu-item-footer">
          <p className="menu-item-price">{price}</p>
          <button className="add-button" onClick={handleAddClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
