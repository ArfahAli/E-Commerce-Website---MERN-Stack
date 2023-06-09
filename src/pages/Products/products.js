import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../HeaderPage/Header";
import Footer from "../Footer/Footer";
import "./products.css";
import data from "../../data";
import Cart from "./cart";
import Cards from "./cards";

const Products = () => {
  const { List, testimonials, Featuredproducts } = data;

  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    const existingProduct = cart.find((item) => item.id === data.id);
    if (existingProduct) {
      // Product already exists in the cart, update the quantity
      const updatedCart = cart.map((item) =>
        item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // Product doesn't exist in the cart, add it with quantity 1
      setCart([...cart, { ...data, quantity: 1 }]);
    }
  };

  const handleShow = (value) => {
    setShowCart(value);
  };

  const handleRemove = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };
  return (
    <div>
      <Header count={cart.length} />
      <div className="sub-containerProducts">
        <div className="row rowProducts">
          <h2>All Products</h2>
          <select>
            <option value="">Default Sorting</option>
            <option value="">Sort by Price</option>
            <option value="">Sort by Popularity</option>
            <option value="">Sort by Rating</option>
            <option value="">Sort by Sale</option>
          </select>
        </div>
      </div>
      <div className="sub-containerProducts">
        <div className="rowProducts">
          {List.map((product) => (
            <Cards
              product={product}
              addToCart={addToCart}
              handleProductClick={handleProductClick}
            />
          ))}
        </div>

        <div className="pg-btns">
          <Link to="./product2">
            <span>1</span>
          </Link>
          <Link to="./product2">
            <span>2</span>
          </Link>
          <Link to="./product2">
            <span>3</span>
          </Link>
          <Link to="./product2">
            <span>4</span>
          </Link>
          <span className="fas fa-arrow-right"></span>
        </div>
      </div>
      {/* <Cards List={List} addToCart={addToCart} /> */}
      {/* {
  showCart? <Cart cart={cart} handleRemove={handleRemove} /> : null
} */}
      <Cart cart={cart} handleRemove={handleRemove} />

      <Footer />
    </div>
  );
};

export default Products;
