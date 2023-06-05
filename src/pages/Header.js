import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css"
const Header =({size})=>{

    const navigate= useNavigate();
    const goToProductDetail=()=>{
        navigate("/Products");
    }
    return(
    <div>
         <div className="containerHeader">
         <div className="navbar">
            <div classNameName="logo">
                <img src="ASSETS/images/logo.png" alt="" width="100px"/>
                <img src="ASSETS/images/menu.png" alt="" className="menu" onclick="menutoggle()"/>
            </div>
            <nav>
            <ul id="MenuItems">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/products'>Products</Link></li>
                                <li><Link to='/ProductDetails'>Product Details</Link></li>
                                <li><a href="/Contactus"  >Contact</a></li>
                                <li><Link to='/LoginSignupContainer'>Account</Link></li>
            </ul>
            </nav>
          <Link to='/cart'> <img src="ASSETS/images/cart.png" alt="" width="30px" height="30px"/></Link> 
          <span>{size}</span>
        </div>
    </div>
    </div>
    );
}
export default Header;