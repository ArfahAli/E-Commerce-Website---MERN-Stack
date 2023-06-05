import { BrowserRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import "./cart.css";
const Cart = () => {


    return (
        <div>
              <Header/>
    {/* <!-- single product page --> */}
    <div class="sub-containerCart cart-page">

<table>
    <tr>
        <th>Product</th>
        <th>Quantity</th>
        <th>Subtotal</th>
    </tr>
    <tr>
        <td> 
            <div class="cart-info">
            <img src="ASSETS/images/buy-1.jpg" alt=""/>
            <div>
                <p>Red Printed T-shirt</p>
                <small>Price: $50.00</small>
                <br/>
                <a href="">Remove</a>
            </div>
        </div>
    </td>
        <td><input type="number" value="1"min={1} max={10}/></td>
        <td>$50.00</td>
        </tr>
        <tr>
            <td> 
                <div class="cart-info">
                <img src="ASSETS/images/buy-2.jpg" alt=""/>
                <div>
                    <p>Red Printed T-shirt</p>
                    <small>Price: $50.00</small>
                    <br/>
                    <a href="">Remove</a>
                </div>
            </div>
        </td>
            <td><input type="number" value="1"/> </td>
            <td>$50.00</td>
        </tr>

        <tr>
            <td> 
                <div class="cart-info">
                <img src="ASSETS/images/buy-3.jpg" alt=""/>
                <div>
                    <p>Red Printed T-shirt</p>
                    <small>Price: $50.00</small>
                    <br/>
                    <a href="">Remove</a>
                </div>
            </div>
        </td>
            <td><input type="number" value="1"/> </td>
            <td>$50.00</td>
        </tr>
</table>
<div class="total-price">
    <table>
        <tr>
            <td>Subtotal</td>
            <td>$200.00</td>
        </tr>
        <tr>
            <td>Tax</td>
            <td>$30.00</td>
        </tr>
        <tr>
            <td>Total</td>
            <td>$230.00</td>
        </tr>
        <tr>
           <Link to='/CheckOut'> <td><button className='btnCheckOut'>CheckOut</button></td></Link>
           <Link to='/products'> <td><button className='btnContinue'>Continue Shopping</button></td></Link>

        </tr>
    </table>
</div>



</div>
    <Footer/>
    </div>
    );
}



export default Cart;