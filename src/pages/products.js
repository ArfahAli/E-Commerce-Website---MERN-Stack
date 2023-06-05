import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./products.css";
import List from "../data";
import Cards from "./cards";
const Products = () => {
  return (
    <div>
      <Header />
      <div className="sub-containerProducts">
        <div className=" row rowProducts">
          <h2>All Products</h2>
          <select>
            <option value="">Defaul Shorting</option>
            <option value="">Short by Price</option>
            <option value="">Short by Pouplarity</option>
            <option value="">Short by Rating</option>
            <option value="">Short by Sale</option>
          </select>
        </div>
      </div>

      {/* //  All products  */}
     
      <Cards/>

      {/* <!-- page Buttons --> */}
      <div className="sub-containerProducts">

      <div className="pg-btns">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span className="fas fa-arrow-right"></span>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;

