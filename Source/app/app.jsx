import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import AboutUs from './components/AboutUs';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
