import React from 'react';
import { Link } from 'react-router-dom';
import { Button, AvatarImage, Card, CardMedia, Container } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Container sx={{ background: 'images/hero.svg' }} />

      <h1>Connecting Farms to Homes</h1>
      <p>Your Livestock Marketplace</p>
      <Link to="/store">
        <button>Shop Now</button>
      </Link>

      <div className="icon-section">
        <div className="icon-card">
          {/* Icon 1 (Safe Payment) */}
          <i className="fas fa-credit-card"></i>
          <p>Safe Payment</p>
        </div>
        <div className="icon-card">
          {/* Icon 2 (Free Delivery) */}
          <i className="fas fa-truck"></i>
          <p>Free Delivery</p>
        </div>
        <div className="icon-card">
          {/* Icon 3 (24/7 Support) */}
          <i className="fas fa-headset"></i>
          <p>24/7 Support</p>
        </div>
      </div>

      <div className="shop-category-section">
        <h2>Shop Categories</h2>
        <div className="category-icons">
          {/* Category 1 */}
          <div className="category-icon">
            <img src="category1.jpg" alt="Category 1" />
            <p>Category 1</p>
          </div>
          {/* Category 2 */}
          <div className="category-icon">
            <img src="category2.jpg" alt="Category 2" />
            <p>Category 2</p>
          </div>
          {/* Category 3 */}
          <div className="category-icon">
            <img src="category3.jpg" alt="Category 3" />
            <p>Category 3</p>
          </div>
          {/* Category 4 */}
          <div className="category-icon">
            <img src="category4.jpg" alt="Category 4" />
            <p>Category 4</p>
          </div>
        </div>
      </div>

      <div className="signup-section">
        {/* Image with button to signup */}
        <img src="signup-image.jpg" alt="Signup Image" />
        <Link to="/signup">
          <button>Register as a Farmer</button>
        </Link>
        <p>Your Path to Lucrative Farming</p>
      </div>
    </Container >
  );
};

export default Home;
