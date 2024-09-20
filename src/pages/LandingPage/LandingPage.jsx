import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleShopClick = () => {
    navigate('/shop');
  };

  return (
    <div className="landing-page-container">
      <div className="content">
        <h1>Foodie Haven</h1>
        <p>Welcome to Foodie Haven, your one-stop shop for all your culinary needs. Explore a wide range of food items, kitchen gadgets, and more. Let's make cooking fun and easy!</p>
        <button className="shop-button" onClick={handleShopClick}>Shop Now</button>
      </div>
    </div>
  );
};

export default LandingPage;