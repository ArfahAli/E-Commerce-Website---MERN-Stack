import Home from "./pages/Home";
// import "./App.css";
import Products from "./pages/products";
import Cart from "./pages/cart";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import React, { useState } from "react";
import ProductDetail from "./pages/ProductDetails";
import Header from "./pages/Header";
import LoginSignupContainer from "./pages/Components/LoginSignupContainer";
import Contactus from "./pages/Contactus";
import Payment from "./pages/Payment";
import OrderConfirmation from "./pages/OrderConfirmation";
import TermsConditions from "./pages/TermsConditions";
import About from "./pages/About";
import Product2 from "./pages/product2";
function App() {

  return (
    <div>
      <Routes> 
      <Route path='/' element={<Home/>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/LoginSignupContainer' element={<LoginSignupContainer/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/ProductDetails' element={<ProductDetail/>}/>
      <Route path='/Contactus' element={<Contactus/>}/>
      <Route path='/Payment' element={<Payment/>}/>
      <Route path='/OrderConfirmation' element={<OrderConfirmation/>}/>
      <Route path='/TermsConditions' element={<TermsConditions/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path="/product/:id" element={<ProductDetail/>} />
      <Route path='/product2' element={<Product2/>}/>

      </Routes>  

    </div>
  );
}
export default App;
