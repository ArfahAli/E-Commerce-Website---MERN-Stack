import React from "react"
import "./Login.css";
import { Link } from 'react-router-dom';

const LoginSide = () => {
  return (
    <div className="login">
        <h1>Login</h1>
        <form>
            <input type={'text'} placeholder={'Username'}/>
            <input type={'password'} placeholder={'Password'}/>
            <Link to='/'>  <button className="button">Login</button></Link>

          

        </form>
    
    </div>
  )
}

export default LoginSide;