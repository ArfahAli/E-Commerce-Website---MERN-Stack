import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter} from 'react-router-dom';
import { ProductProvider } from './pages/Context/productContext';
import { createRoot} from 'react-dom';
import { CartProvider } from './pages/Context/cartContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <CartProvider>
      <ProductProvider>
    <App />
    </ProductProvider>
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>

);

reportWebVitals();
