// ManageProducts.jsx
import axios from "axios";
import React, { useState } from 'react';
import './ManageProducts.css';

const ManageProducts = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'Lemon Pepper Soup',
      description: 'A soothing blend of pepper, aromatic tender garlic, and fresh lemon juice.',
      country: 'China',
      weight: '250-300 GRMS',
      price: 249.00,
      image: 'src/assets/images/image1.jpeg',
    },
    {
      id: 2,
      title: 'Burnt Garlic',
      description: 'Fried garlic with mixed vegetables and chili oil.',
      country: 'China',
      weight: '250-300 GRMS',
      price: 289.00,
      image: 'src/assets/images/image2.jpeg',
    },
    {
      id: 3,
      title: 'Corn Bean Pepper',
      description: 'A delicious blend of corn, beans, and spices.',
      country: 'India',
      weight: '250-300 GRMS',
      price: 199.00,
      image: 'src/assets/images/image3.jpeg',
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    country: '',
    weight: '',
    price: '',
    image: null,
  });

  const handleAddProduct = () => {
    if (!newProduct.image) {
      alert('Please upload an image!');
      return;
    }

    const newId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
    const product = {
      id: newId,
      title: newProduct.title,
      description: newProduct.description,
      country: newProduct.country,
      weight: newProduct.weight,
      price: parseFloat(newProduct.price),
      image: newProduct.image,
    };
    const newProductdata = {
  "title":newProduct.title,
    "description": newProduct.description,
    "weight":newProduct.weight,
    "country":newProduct.country,
    "price":parseFloat(newProduct.price),
    "image":newProduct.image
};
console.log(newProductdata);
    axios
      .post("http://localhost:3000/api/item", newProductdata)
      .then((res) => {
          console.log("Response:", res.data); // Print the response data to console
      })
      .catch((error) => {
          console.error("Error:", error); // Print any errors to console
      });
    setProducts([...products, product]);
    setNewProduct({
      title: '',
      description: '',
      country: '',
      weight: '',
      price: '',
      image: null,
    });
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewProduct({ ...newProduct, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="manage-products">
      <h2 className="section-title">Manage Products</h2>
      <div className="product-form">
        <input
          type="text"
          name="title"
          placeholder="Product Title"
          value={newProduct.title}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Product Description"
          value={newProduct.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={newProduct.country}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="weight"
          placeholder="Weight"
          value={newProduct.weight}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Product Price"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button className="add-button" onClick={handleAddProduct}>
          Add Product
        </button>
      </div>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <div className="product-info">
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-details">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p><strong>Country:</strong> {product.country}</p>
                <p><strong>Weight:</strong> {product.weight}</p>
                <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
              </div>
            </div>
            <button className="delete-button" onClick={() => handleDeleteProduct(product.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageProducts;
