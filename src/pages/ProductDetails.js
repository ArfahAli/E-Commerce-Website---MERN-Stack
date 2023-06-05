import { useState } from "react";
import { useReducer } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./ProductDetails.css";
import { type } from "@testing-library/user-event/dist/type";
const ProductDetail = () => {

  const [products] = useState([
    {
      imageSrc: "ASSETS/images/product-12.jpg",
      name: "Red T-Shirt",
      rating: [
        "fa-regular fa-star",
        "fa-solid fa-star",
        "fa-solid fa-star",
        "fa-solid fa-star",
        "fa-regular fa-star-half-stroke",
      ],
      price: "$50.00",
    },
    {
      imageSrc: "ASSETS/images/product-5.jpg",
      name: "Grey Sneakers",
      rating: [
        "fa-solid fa-star",
        "fa-solid fa-star",
        "fa-solid fa-star",
        "fa-solid fa-star",
        "fa-regular fa-star",
      ],
      price: "$40.00",
    },
    {
      imageSrc: "ASSETS/images/product-7.jpg",
      name: "Socks",
      rating: [
        "fa-solid fa-star",
        "fa-solid fa-star",
        "fa-solid fa-star",
        "fa-solid fa-star",
        "fa-solid fa-star",
      ],
      price: "$60.00",
    },

    {
      imageSrc: "ASSETS/images/product-11.jpg",
      name: "Sneakers",
      rating: [
        "fa-solid fa-star",
        "fa-solid fa-star",
        "fa-solid fa-star",
        "fa-solid fa-star",
        "fa-regular fa-star-half-stroke",
      ],
      price: "$70.00",
    },
  ]);
    

        const reducer = (state, action) => {
          if (action.type === "Increement") {
            return { quantity: state.quantity + 1 };
          } else if (action.type === "Decreement" && state.quantity > 1) {
            return { quantity: state.quantity - 1 };
          }
          
          // Default return statement when no state update is needed
          return state;
        };
        
        
         const [state, dispatch] = useReducer(reducer,{quantity:1});

  return (
    <div>
      <Header />

      <div class="sub-container single-product">
        <div class="rowDetails">
          <div class="col-2">
            <img src="ASSETS/images/gallery-1.jpg" alt="" id="productImg" />

            <div class="small-image-row">
              <div class="small-image-col">
                <img
                  src="ASSETS/images/gallery-1.jpg"
                  alt=""
                  width="100%"
                  class="small-img"
                />
              </div>
              <div class="small-image-col">
                <img
                  src="ASSETS/images/gallery-2.jpg"
                  alt=""
                  width="100%"
                  class="small-img"
                />
              </div>
              <div class="small-image-col">
                <img
                  src="ASSETS/images/gallery-3.jpg"
                  alt=""
                  width="100%"
                  class="small-img"
                />
              </div>
              <div class="small-image-col">
                <img
                  src="ASSETS/images/gallery-4.jpg"
                  alt=""
                  width="100%"
                  class="small-img"
                />
              </div>
            </div>
          </div>
          <div class="col-2">
            <p>Home / T-Shirt</p>
            <h1>Red Printed T-shirt by Junaid Jamshed</h1>
            <h4>$50.00</h4>
            <select>
              <option value="">Select Size</option>
              <option value="">XXL</option>
              <option value="">XL</option>
              <option value="">Large</option>
              <option value="">Medium</option>
              <option value="">Small</option>
              <option value="">XS</option>
            </select>
            <div className="quantity2">
                                <div class="quantity">
                                    <button onClick={()=> dispatch({type:'Decreement'})}>-</button>
                                    <span> {state.quantity}</span>
                                    <button onClick={()=> dispatch({type:'Increement'})}>+</button>
                                    <button class="btn" >Add to Bucket</button>
                                </div>
            
            <h3>
              Product Details <i class="fa fa-indent"></i>
            </h3>
            <br />
            <p>
              Give your summer wardrobe a style upgrade with the HRX Men's
              Active T-shirt. Team it with a pair of shorts for your morning
              workout or a denims for an evening out with the guys.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- tittle --> */}

      <div className="sub-containerDetails">
      <h2>Related Products</h2>
        <div className="rowDetails">
          {products.map((product, index) => (
            <div className="col-4" key={index}>
              <img src={product.imageSrc} alt="" />
              <h4>{product.name}</h4>
              <div className="ratings">
                {product.rating.map((rating, index) => (
                  <i className={rating} key={index}></i>
                ))}
              </div>
              <h5>{product.price}</h5>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
};
export default ProductDetail;
