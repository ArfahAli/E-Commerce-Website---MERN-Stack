import { useRef, useState } from 'react';
import Signup from './Signup';
import LoginSide from './Login';
import "./LoginSignupContainer.css";
import Navigation from './Navigation';

const LoginSignupContainer = () => {

    const [Login, setLogin]= useState(true);
    const LoginSignupContainerRef = useRef(null);

    const handleClick =()=>{
        setLogin(!Login);
        LoginSignupContainerRef.current.classList.toggle("active");
    }

  return (
    <div>
      <Navigation/>
    <div className='LS_Container' ref={LoginSignupContainerRef}>
        <LoginSide />
        <div className='side-div'>

            <button className='button' onClick={handleClick}>{Login? "Signup": "Login"}</button>
        </div>
        <Signup/>
    </div>
    </div>
  )
}

export default LoginSignupContainer