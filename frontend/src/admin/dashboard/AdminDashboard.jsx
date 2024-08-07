// AdminDashboard.jsx

import React from 'react';
import './AdminDashboard.css';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="admin-links">
        <Link to="/admin/products" className="admin-link">Manage Products</Link>
        <Link to="/admin/orders" className="admin-link">View Orders</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
