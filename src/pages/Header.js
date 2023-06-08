import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css"
const Header =(props)=>{

 
        const navigate =useNavigate();
    function goToAbout(){
        navigate("/About");
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
            {/* onClick={()=>props.handleShow(false)} */}
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/Products'>Products</Link></li>
                                {/* <li onClick={() => props.handleShow(false)}>Products</li> */}

                                {/* <li><Link to='/ProductDetails'>Product Details</Link></li> */}
                                <li><Link to='/Contactus'>Contact Us</Link></li>
                                <li><Link to='/About'>About Us</Link></li>
                                <li><Link to='/LoginSignupContainer'>Account</Link></li>
                                {/* <li><button onClick={goToAbout}>About Us</button></li> */}

            </ul>
            </nav>
            {/* <img
            onClick={() => props.handleShow(true)}
            src="/ASSETS/images/cart.png"
            alt=""
            width="30px"
            height="30px"
          /> */}
      <Link to='/cart'><img src="/ASSETS/images/cart.png" alt="" width="30px" height="30px" /></Link> 
          <sup>{props.count}</sup>
        </div>
        
    </div>
    </div>
    );
}
export default Header;