import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">Foodie Haven</Link>
        <div className="navbar-links">
          <Link to="/shop" className="navbar-link">Home</Link>
          <div className="cart-icon" onClick={handleCartClick}>
            <FaShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;