import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Welcome to the Home Page</h2>
      <div className="login-options">
        <Link to="/user1" className="login-option">
          User Login
        </Link>
        <Link to="/admin" className="login-option">
          Admin Login
        </Link>
      </div>
    </div>
  );
};

export default HomePage;