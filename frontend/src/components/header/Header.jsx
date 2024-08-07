import React from "react";
import "./Header.css";

const Header = ({ cartItems }) => {

  // Calculate total items and price
  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price),
    0
  );

  // Navigate to cart page
  // const handleCartClick = () => {
  //  navigate("/cart");
  // };

  return (
    <div className="navbar">
      <div className="menu-icon">&#9776; Menu</div>
      <div className="search-icon">&#128269;</div>

      {/* Cart Information */}
      {totalItems > 0 && (
        <div className="cart-info">
          <span className="cart-icon">&#128722;</span> {/* Shopping cart icon */}
          <span className="cart-details">
            {totalItems} item{totalItems > 1 ? "s" : ""} - ₹
            {totalPrice.toFixed(2)}
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;
