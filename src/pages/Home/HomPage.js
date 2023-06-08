import React, { useState } from 'react'
import Home from './Home';
import MyContext from './MyContext';

const HomPage = () => {

    const [Featuredproducts]= useState([
        {
          id: 1,
          image: "/ASSETS/images/product-1.jpg",
          name: "Red T-Shirt",
          rating: [1, 1, 1, 1, 0],
          price: 50.00,
        },
        {
          id: 2,
          image: "/ASSETS/images/product-2.jpg",
          name: "Black Sneakers",
          rating: [1, 1, 1, 0.5, 0],
          price: 40.00
        },
        {
          id: 3,
          image: "/ASSETS/images/product-3.jpg",
          name: "Grey Trouser",
          rating: [1, 1, 1, 1, 0.5],
          price: 60.00,
        },
        {
          id: 4,
          image: "/ASSETS/images/product-4.jpg",
          name: "Navy Blue T-Shirt",
          rating: [1, 1, 1, 1, 1],
          price: 70.00,
        },
      ]);
      
  return (
    <div>
        <MyContext.Provider value={Featuredproducts}>
            <Home/>
        </MyContext.Provider>

    </div>
  )
}

export default HomPage;