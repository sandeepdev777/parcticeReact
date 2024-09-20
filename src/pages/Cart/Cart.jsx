import React, { useContext } from 'react';
import { CartContext } from '../../ShopContext/CartContext';
import CartItem from './CartItem';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const navigate = useNavigate();

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onRemove={removeFromCart}
        />
      ))}
      <div className="cart-summary">
        <h3>Total Amount: ${totalAmount}</h3>
        <button className="checkout-button" onClick={goToShop}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;