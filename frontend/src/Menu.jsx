import React from "react";
import "./Menu.css"; // Import the CSS file

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Lemon Pepper Soup",
      country: "China",
      image: "path/to/lemon-pepper-soup.jpg", // Replace with your image path
      weight: "250-300 GRMS",
      price: "249.00",
      description:
        "A Southing Blend of Mix of Pepper, Arometic Tender Garlic, Fresh Lemon Juice and salt",
    },
    {
      id: 2,
      name: "Burnt Garlic",
      country: "China",
      image: "path/to/burnt-garlic.jpg", // Replace with your image path
      weight: "250-300 GRMS",
      price: "289.00",
      description:
        "Fried Garlic with Mix Vegetables & Chilli oil with aromatic.",
    },
    {
      id: 3,
      name: "Corn Bean Pepper",
      image: "path/to/corn-bean-pepper.jpg", // Replace with your image path
      weight: "250-300 GRMS",
      price: "199.00",
      description:
        "A delicious blend of corn, beans, and spices to warm your soul.",
    },
  ];

  return (
    <div className="menu-container">
      {/* Top Navigation Bar */}
      <div className="navbar">
        <div className="menu-icon">&#9776; Menu</div>
        <div className="search-icon">&#128269;</div>
      </div>

      {/* Recommended Section */}
      <h2 className="section-title">RECOMMENDED</h2>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img
              src={item.image}
              alt={item.name}
              className="menu-item-image"
            />
            <div className="menu-item-info">
              <h3 className="menu-item-title">
                {item.name} <span className="country">({item.country})</span>
              </h3>
              <p className="menu-item-weight">({item.weight})</p>
              <p className="menu-item-description">{item.description}</p>
              <div className="menu-item-footer">
                <p className="menu-item-price">{item.price}</p>
                <button className="add-button">Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Feedback Sticky Bar */}
      <div className="feedback-bar">
        <span>Help us make Smart Queue better! 😃</span>
      </div>
    </div>
  );
};

export default Menu;
