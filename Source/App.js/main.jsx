import React from "react";
import { ReactDOM } from "react-dom/client";
import main from "./App"
import "./app.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import AboutUs from './components/AboutUs';
import { Provider } from "react-redux";
import store from "../Pages/store";

ReactDOM.createRoot(Document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutus" component={AboutUs} />        
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
