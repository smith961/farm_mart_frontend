// Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">farmmart</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/store">Store</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
        </ul>
      </nav>
      <div className="auth-button">
        <Link to="/auth">
          <button>Login / Register</button>
      
        </Link>
      </div>
      <div id="cart">
        cart: $<span id="total">0</span>
      </div>
    </header>
  );
};

export default Header;
