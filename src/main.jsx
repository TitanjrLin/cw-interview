import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import App from './App';
import RWDStyle from './components/styled/RWDStyle';
import './services/device';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const template = (
  <React.StrictMode>
    <Provider store={store}>
      <RWDStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

root.render(template);
