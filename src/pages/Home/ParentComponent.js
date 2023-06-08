import React, { useState } from "react";
import MyContext from "./AppProvider";
import Home from "./Home";
const ParentComponent = () => {
  const [Featuredproducts] = useState([
    {
      id: 1,
      image: "/ASSETS/images/product-1.jpg",
      name: "Red T-Shirt",
      rating: [1, 1, 1, 1, 0],
      price: 50.0,
    },
    {
      id: 2,
      image: "/ASSETS/images/product-2.jpg",
      name: "Black Sneakers",
      rating: [1, 1, 1, 0.5, 0],
      price: 40.0,
    },
    {
      id: 3,
      image: "/ASSETS/images/product-3.jpg",
      name: "Grey Trouser",
      rating: [1, 1, 1, 1, 0.5],
      price: 60.0,
    },
    {
      id: 4,
      image: "/ASSETS/images/product-4.jpg",
      name: "Navy Blue T-Shirt",
      rating: [1, 1, 1, 1, 1],
      price: 70.0,
    },
  ]);

  return (
    <div>
      <MyContext.Provider value={Featuredproducts}>
        <Home />
      </MyContext.Provider>
    </div>
  );
};

export default ParentComponent;
