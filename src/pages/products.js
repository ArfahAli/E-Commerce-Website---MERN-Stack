import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./products.css";
import List from "../data";
import Cart from "./cart";
import Cards from "./cards";
const Products = () => {

  const [cart, setCart]= useState([]);
  const[showCart, setShowCart] = useState(false);
  const addToCart=(data)=>{
    setCart([...cart, {...data, quantity:1}])
  }

  const handleShow = (value) => {
    setShowCart(value);
  };
  

  const handleRemove = (id) => {
    const newCart = cart.filter((item) => item.name !== id);
    setCart(newCart);
  };
  
  return (
    <div>
      <Header count ={cart.length} 
      handleShow={handleShow}/>
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
      {/* {
        showCart?<Cart cart={cart}/> :<Cards List={List} addToCart={addToCart}/>

        
      } */}

      <Cards List={List} addToCart={addToCart}/>
      <Cart cart={cart} handleRemove={handleRemove}/>
      <Footer />
    </div>
  );
};

export default Products;

