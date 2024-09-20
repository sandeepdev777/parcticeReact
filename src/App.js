import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';

import Cart from './pages/Cart/Cart';
import Shop from './pages/Shop/Shop';
import { CartProvider } from './ShopContext/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/cart" element={<div><Navbar/><Cart /></div>} />
            <Route path="/shop" element={<div><Navbar/><Shop /></div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;