import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Home from '../components/common/Home';
import AboutUs from '../components/common/AboutUs';
import Store from '../components/common/Store';
import { Container } from '@mui/material';

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <br />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="store" element={<Store />} />
        </Routes>
        <br />
        <br />
        <Footer />
      </Container>
    </Router >
  );
};

export default App;
