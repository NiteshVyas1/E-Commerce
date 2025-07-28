import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'; // Optional, based on your styles
import ShopContextProvider from './context/ShopContext';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  
  <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>  
  </BrowserRouter>
  
);
