import React from 'react';
import './CartItem.css';

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <div className="quantity-controls">
          <button onClick={() => onDecrease(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onIncrease(item.id)}>+</button>
        </div>
        <button className="remove-button" onClick={() => onRemove(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;