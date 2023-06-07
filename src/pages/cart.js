import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import "./cart.css";

const Cart = ({ cart, handleRemove }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  const incrementQuantity = (cartIndex) => {
    setCartItems(prevCartItems => {
      return prevCartItems.map((item, index) =>
        (cartIndex === index) ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const decrementQuantity = (cartIndex) => {
    setCartItems(prevCartItems => {
      return prevCartItems.map((item, index) =>
        (cartIndex === index && item.quantity > 1) ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  return (
    <div>
      {/* <!-- single product page --> */}
      <div className="sub-containerCart cart-page">
        <table>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          {cartItems.map((cartItem, cartIndex) => (
            <tr key={cartIndex}>
              <td>
                <div className="cart-info">
                  <img src={cartItem.image} alt="" />
                  <div>
                    <p>{cartItem.name}</p>
                    <small>Price: ${cartItem.price}</small>
                    <br />
                    <button onClick={() => handleRemove(cartItem.name)}>Remove</button>
                  </div>
                </div>
              </td>
              <td>
                <div className="quantity">
                  <button onClick={() => decrementQuantity(cartIndex)}>-</button>
                  <span>{cartItem.quantity}</span>
                  <button onClick={() => incrementQuantity(cartIndex)}>+</button>
                </div>
              </td>
              <td>{cartItem.price * cartItem.quantity}</td>
            </tr>
          ))}
          <tr>
            <td>Subtotal</td>
            <td>
            </td>
          </tr>
        </table>
        <div className="total-price">
          <table>
            <tr>
              <td>Total</td>
              <td>$ {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</td>
            </tr>
            <tr>
              <td>
                <Link to='/Payment'><button className='btnCheckOut'>CheckOut</button></Link>
              </td>
              <td>
                <Link to='/products'><button className='btnContinue'>Continue Shopping</button></Link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cart;
