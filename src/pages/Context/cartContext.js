import React, { useEffect, useReducer, useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const handleRemove = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
      };

      const handleProductClick = (product) => {
        navigate(`/product/${product.id}`, { state: { product } });
      };

  const removeItem = (item) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((i) => i.id !== item.id);
      return updatedCart;
    });
  };

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

 

  const value = { cart, setCart, handleRemove, addToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

