import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShoppingCartPage.css';
import { FaShoppingCart } from 'react-icons/fa';

const ShoppingCartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1', price: 10, quantity: 1 },
    { id: 2, name: 'Item 2', price: 20, quantity: 2 },
  ]);

  const navigate = useNavigate();

  const handleQuantityChange = (id, quantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item
    ));
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleAddItem = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleBackToShop = () => {
    navigate('/home');
  };

  return (
    <div className="shopping-cart-container">
      <div className="cart-icon">
        <FaShoppingCart />
        <span className="item-count">{totalItems}</span>
      </div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>${item.price}</span>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, e.target.value)}
              min="1"
            />
            <button onClick={() => handleAddItem(item.id)}>Add</button>
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="total-price">
        Total: ${totalPrice}
      </div>
      <button className="back-to-shop-button" onClick={handleBackToShop}>Back to Shop</button>
    </div>
  );
};

export default ShoppingCartPage;