import React from 'react';
import './ShopItem.css';

const ShopItem = ({ item, onAddToCart }) => {
  return (
    <div className="shop-item">
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <button onClick={() => onAddToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default ShopItem;