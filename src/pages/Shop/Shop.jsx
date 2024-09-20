import React, { useContext } from 'react';
import { CartContext } from '../../ShopContext/CartContext';
import ShopItem from './ShopItem';
import './Shop.css';

const Shop = () => {
  const { addToCart } = useContext(CartContext);

  const items = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 30 },
  ];

  return (
    <div className="shop-container">
      <h2>Shop</h2>
      <div className="shop-items">
        {items.map(item => (
          <ShopItem key={item.id} item={item} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Shop;