import React, { useState } from "react"; // Import useState
import "./Menu.css"; // Import the CSS file
import CartItem from "../cart/CartItem"; // Import the CartItem component
import Footer from "../footer/Footer"; // Import the Footer component
import Header from "../header/Header"; // Import the Header component

const Menu = () => {
  const [cartItems, setCartItems] = useState([]); // State for cart items

  const menuItems = [
    {
      id: 1,
      name: "Lemon Pepper Soup",
      country: "China",
      image: "src/assets/images/image1.jpeg",
      weight: "250-300 GRMS",
      price: "249.00",
      description:
        "A Soothing Blend of Mix of Pepper, Aromatic Tender Garlic, Fresh Lemon Juice and salt",
    },
    {
      id: 2,
      name: "Burnt Garlic",
      country: "China",
      image: "src/assets/images/image2.jpeg",
      weight: "250-300 GRMS",
      price: "289.00",
      description:
        "Fried Garlic with Mix Vegetables & Chilli oil with aromatic.",
    },
    {
      id: 3,
      name: "Corn Bean Pepper",
      country: "India",
      image: "src/assets/images/image3.jpeg",
      weight: "250-300 GRMS",
      price: "199.00",
      description:
        "A delicious blend of corn, beans, and spices to warm your soul.",
    },
  ];

  // Function to handle adding an item to the cart
  const handleAddToCart = (item) => {
    setCartItems((cartItems) => [...cartItems, item]);
    console.log(cartItems);
  };

  return (
    <div className="menu-container">
      {/* Header Component */}
      <Header cartItems={cartItems} />

      {/* Recommended Section */}
      <h2 className="section-title">RECOMMENDED</h2>
      <div className="menu-items">
        {menuItems.map((item) => (
          <CartItem key={item.id} item={item} onAddToCart={handleAddToCart} />
        ))}
      </div>

      {/* Footer Component */}
      <Footer />

      
    </div>
  );
};

export default Menu;
