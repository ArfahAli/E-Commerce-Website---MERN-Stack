
import React from "react";
import { Link } from "react-router-dom";
import List from "../data";
const Cards = (props) => {
  const { product,addToCart,handleProductClick } = props;

  return (

          <div className="col-4">
              <img onClick={() => handleProductClick(product)} src={product.image} alt="" />
            <h4>{product.name}</h4>
            <div className="ratings">
            {product.rating.map((star, index) => (
                    <i
                      key={index}
                      className={`fa-solid fa-star${
                        star === 0.5 ? "-half-stroke" : ""
                      }`}
                    ></i>
                  ))}
            </div>
            <h5>${product.price}</h5>
              <button
              onClick={()=>addToCart(product)}
             className="btnBucket">Add to Bucket</button>

      
      </div>

  );
};

export default Cards;
