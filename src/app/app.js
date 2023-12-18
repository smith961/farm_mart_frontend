import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Store from '../pages/Store';
import ContactUs from '../pages/ContactUs';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import FarmerDashboard from '../components/common/FarmerDashboard';
import UserProfile from '../pages/auth/UserProfile';
import { Container } from '@mui/material';

const App = () => {
  return (
    <Router>
      <Header />
      <Container fixed maxWidth='lg' sx={{ 'minHeight': '70vh', paddingTop: '2rem' }} >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="store" element={<Store />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard" element={<FarmerDashboard />} />
          {/* <Route path="profile" element={<UserProfile />} /> */}
        </Routes>
      </Container>
      <Footer />
    </Router >
  );
};

export default App;
