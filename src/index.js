import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import './index.css';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
