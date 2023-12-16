import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Home from '../Pages/Home';
import AboutUs from '../components/common/AboutUs';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
