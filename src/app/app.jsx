import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Home from '../pages/Home';
import AboutUs from '../components/common/AboutUs';
import { Container } from '@mui/material';

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
