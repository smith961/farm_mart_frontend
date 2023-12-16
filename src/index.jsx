import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './app/app.jsx';
import Store from './app/store.jsx';
import { Provider } from 'react-redux';


const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  root
);
