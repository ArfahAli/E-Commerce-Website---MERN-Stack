import Home from "./pages/Home/Home";
// import "./App.css";
import Products from "./pages/Products/products";
import Cart from "./pages/Products/cart";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import React, { useState } from "react";
import ProductDetail from "./pages/Products/ProductDetails";
import LoginSignupContainer from "./Components/LoginSignupContainer";
import Contactus from "./pages/Contact/Contactus";
import Payment from "./pages/CheckOut/Payment";
import OrderConfirmation from "./pages/Notifications/OrderConfirmation";
import TermsConditions from "./pages/Notifications/TermsConditions";
import About from "./pages/About/About";
import Product2 from "./pages/Products/product2";
import { AppProvider } from './pages/Home/AppProvider';

function App() {
  return (
    <div>
      <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/LoginSignupContainer"element={<LoginSignupContainer />}/>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/ProductDetails" element={<ProductDetail />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/OrderConfirmation" element={<OrderConfirmation />} />
        <Route path="/TermsConditions" element={<TermsConditions />} />
        <Route path="/About" element={<About />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/product2" element={<Product2 />} />
      </Routes>
      </AppProvider>
    </div>
  );
}
export default App;
