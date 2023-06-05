import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Products from './products';
import Header from './Header';
import Footer from './Footer';
import "./Home.css";
import Cart from './cart';
// import "./styling.css";
const Home = () => {


    const [Featuredproducts, setFeaturedproducts] = useState([
        {
            id: 1,
            image: 'ASSETS/images/product-1.jpg',
            name: 'Red T-Shirt',
            rating: [1, 1, 1, 1, 0],
            price: '$50.00',
        },
        {
            id: 2,
            image: 'ASSETS/images/product-2.jpg',
            name: 'Black Sneakers',
            rating: [1, 1, 1, 0.5, 0],
            price: '$40.00',
        },
        {
            id: 3,
            image: 'ASSETS/images/product-3.jpg',
            name: 'Grey Trouser',
            rating: [1, 1, 1, 1, 0.5],
            price: '$60.00',
        },
        {
            id: 4,
            image: 'ASSETS/images/product-4.jpg',
            name: 'Navy Blue T-Shirt',
            rating: [1, 1, 1, 1, 1],
            price: '$70.00',
        },
    ]);

    const [Latestproducts, setLatestproducts] = useState([
        { id: 1, image: 'ASSETS/images/product-5.jpg', name: 'Grey Shoes', rating: [1, 1, 1, 1, 0], price: '$50.00', },
        { id: 2, image: 'ASSETS/images/product-6.jpg', name: 'Black T-Shirt', rating: [1, 1, 1, 0.5, 0], price: '$60.00', },
        { id: 3, image: 'ASSETS/images/product-7.jpg', name: '3-Pair of Sockes', rating: [1, 1, 1, 1, 0.5], price: '$30.00', },
        {
            id: 4,
            image: 'ASSETS/images/product-8.jpg',
            name: 'Fossil Watch',
            rating: [1, 1, 1, 1, 1],
            price: '$80.00',
        },
        {
            id: 5,
            image: 'ASSETS/images/product-9.jpg',
            name: 'Watch',
            rating: [1, 1, 1, 1, 0],
            price: '$80.00',
        },
        {
            id: 6,
            image: 'ASSETS/images/product-10.jpg',
            name: 'Black Sneakers',
            rating: [1, 1, 1, 1, 0.5],
            price: '$50.00',
        },
        {
            id: 7,
            image: 'ASSETS/images/product-3.jpg',
            name: 'Brown Trouser',
            rating: [1, 1, 1, 0.5, 1],
            price: '$60.00',
        },
        {
            id: 8,
            image: 'ASSETS/images/product-11.jpg',
            name: 'Comfy Shoes',
            rating: [1, 1, 1, 1, 1],
            price: '$70.00',
        },
        {
            id: 9,
            image: 'ASSETS/images/product-12.jpg',
            name: 'Red T-Shirt',
            rating: [0.5, 1, 1, 1, 0.5],
            price: '$50.00',
        },
        {
            id: 10,
            image: 'ASSETS/images/product-5.jpg',
            name: 'Grey Sneakers',
            rating: [1, 1, 1, 1, 0],
            price: '$40.00',
        },
        {
            id: 11,
            image: 'ASSETS/images/product-7.jpg',
            name: 'Socks',
            rating: [1, 1, 1, 1, 1],
            price: '$60.00',
        },
        {
            id: 12,
            image: 'ASSETS/images/product-11.jpg',
            name: 'Sneakers',
            rating: [1, 1, 1, 1, 0.5],
            price: '$70.00',
        },
    ]);

    const [testimonials, setTestimonials] = useState([
        {
          id: 1,
          quote: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus labore dolor vel repudiandae eveniet ipsa placeat, non quas fuga excepturi illum minima. Adipisci, incidunt hic.',
          rating: [1, 1, 1, 1, 0],
          image: 'ASSETS/images/user-1.png',
          name: 'Esha Mehmood',
        },
        {
          id: 2,
          quote: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus labore dolor vel repudiandae eveniet ipsa placeat, non quas fuga excepturi illum minima. Adipisci, incidunt hic.',
          rating: [1, 1, 1, 1, 0],
          image: 'ASSETS/images/user-2.png',
          name: 'Danyal Ahmed',
        },
        {
          id: 3,
          quote: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus labore dolor vel repudiandae eveniet ipsa placeat, non quas fuga excepturi illum minima. Adipisci, incidunt hic.',
          rating: [1, 1, 1, 1, 0],
          image: 'ASSETS/images/user-3.png',
          name: 'Hifsa Rehman',
        },
      ]);
    return (
        <div>
            <div className="header">
                <div className="container">
                    <Header />

                    <div className="row">
                        <div className="col-2">
                            <h1>Give your Workout <br />a new Style!
                            </h1>
                            <p>Success isn't always about greatness. It's about consistency. Consistet <br /> hard work gains
                                Success. Greatness will come.</p>
                            <a href="" className="btn">Explore Now <i className="fas fa-arrow-right"></i></a>
                        </div>
                        <div className="col-2">
                            <img src="ASSETS/images/image1.png" alt="" />
                        </div>

                    </div>

                </div>

            </div>



            {/* <!-- Featured categories --> */}

            <div className="categories">
                <div className="sub-container">
                    <div className="row">
                        <div className="col-4">
                            <img src="ASSETS/images/category-1.jpg" alt="" />
                        </div>
                        <div className="col-4">
                            <img src="ASSETS/images/category-2.jpg" alt="" />

                        </div>
                        <div className="col-4">
                            <img src="ASSETS/images/category-3.jpg" alt="" />

                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Featured products --> */}


            <div className="sub-container">
                <h2 className="tittle">Featured Products</h2>
                <div className="row">
                    {Featuredproducts.map((product) => (
                        <div className="col-4" key={product.id}>
                            <img src={product.image} alt="" />
                            <h4>{product.name}</h4>
                            <div className="ratings">
                                {product.rating.map((star, index) => (
                                    <i
                                        key={index}
                                        className={`fa-solid fa-star${star === 0.5 ? '-half-stroke' : ''}`}
                                    ></i>
                                ))}
                            </div>
                            <h5>{product.price}</h5>
                        </div>
                    ))}
                </div>
            </div>

            {/* Latest Products */}

            <div className="sub-container">
                <h2 className="tittle">Latest Products</h2>
                <div className="row">
                    {Latestproducts.map((product) => (
                        <div className="col-4" key={product.id}>
                            <img src={product.image} alt="" />
                            <h4>{product.name}</h4>
                            <div className="ratings">
                                {product.rating.map((star, index) => (
                                    <i
                                        key={index}
                                        className={`fa-solid fa-star${star === 0.5 ? '-half-stroke' : ''}`}
                                    ></i>
                                ))}
                            </div>
                            <h5>{product.price}</h5>
                        </div>
                    ))}
                </div>
            </div>

            {/* <!-- offer --> */}

            <div className="offer">
                <div className="sub-container">
                    <div className="row">
                        <div className="col-2">
                            <img src="ASSETS/images/exclusive.png" alt="" className="offer-image" />
                        </div>
                        <div className="col-2">
                            <p>Exclusively available</p>
                            <h1>Smart band 4</h1>
                            <small>The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3) AMOLED color full touch display
                                with adjustable brightness, so everything is clear as can be.</small>
                            <a href="" className="btn">Buy Now <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- testimonials --> */}

            <div className="testimonials">
      <div className="sub-container">
        <div className="row">
          {testimonials.map((testimonial) => (
            <div className="col-3" key={testimonial.id}>
              <i className="fa fa-quote-left"></i>
              <p>{testimonial.quote}</p>
              <div className="ratings">
                {testimonial.rating.map((star, index) => (
                  <i
                    key={index}
                    className={`fa-solid fa-star${star === 0.5 ? '-half-stroke' : ''}`}
                  ></i>
                ))}
              </div>
              <img src={testimonial.image} alt="" />
              <h3>{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>

            {/* <!-- brands --> */}

            <div className="brands">
                <div className="sub-container">
                    <div className="row">
                        <div className="col-5">
                            <img src="ASSETS/images/logo-godrej.png" alt="" />
                        </div>
                        <div className="col-5">
                            <img src="ASSETS/images/logo-coca-cola.png" alt="" />
                        </div>
                        <div className="col-5">
                            <img src="ASSETS/images/logo-oppo.png" alt="" />
                        </div>
                        <div className="col-5">
                            <img src="ASSETS/images/logo-paypal.png" alt="" />
                        </div>
                        <div className="col-5">
                            <img src="ASSETS/images/logo-philips.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>


           <Footer/>


        </div>

    );

}

export default Home;