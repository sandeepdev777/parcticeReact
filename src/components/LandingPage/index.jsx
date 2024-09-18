import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import { FaShoppingCart } from 'react-icons/fa';

const categories = [
  { name: 'Electronics', image: 'https://via.placeholder.com/150' },
  { name: 'Fashion', image: 'https://via.placeholder.com/150' },
  { name: 'Household Goods', image: 'https://via.placeholder.com/150' },
  { name: 'Toys', image: 'https://via.placeholder.com/150' },
];

const LandingPage = () => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleLogoutClick = () => {
    navigate('/');
  };

  return (
    <div className="landing-page-container">
      <header className="header">
        <h1>ShopEasy</h1>
        <input type="text" placeholder="Search for products, brands and more" className="search-bar" />
        <div className="header-buttons">
          <div className="cart-icon" onClick={handleCartClick}>
            <FaShoppingCart />
          </div>
          <button className="logout-button" onClick={handleLogoutClick}>Logout</button>
        </div>
      </header>
      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.image} alt={category.name} className="category-image" />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;