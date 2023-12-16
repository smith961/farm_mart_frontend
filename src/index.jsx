import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './app/app.jsx';
import Store from './app/store.jsx';
import { Provider } from 'react-redux';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { themeOptions } from './theme.jsx';


let theme = createTheme(themeOptions);
const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={Store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  root
);
