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
import CheckOut from "./pages/CheckOut";
import Payment from "./pages/Payment";
import OrderConfirmation from "./pages/OrderConfirmation";
function App() {
 const [show, setShow]= useState(true);
 const [cart, setCart]= useState([]);

  return (
    <div>
      
      <Routes> 
      <Route path='/' element={<Home/>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/LoginSignupContainer' element={<LoginSignupContainer/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/ProductDetails' element={<ProductDetail/>}/>
      <Route path='/Contactus' element={<Contactus/>}/>
      <Route path='/CheckOut' element={<CheckOut/>}/>
      <Route path='/Payment' element={<Payment/>}/>
      <Route path='/OrderConfirmation' element={<OrderConfirmation/>}/>




      </Routes>   
    </div>
  );
}
export default App;
