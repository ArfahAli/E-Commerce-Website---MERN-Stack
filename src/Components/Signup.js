import React from "react";
import "./Signup.css";
const Signup =()=>{

    return(
        <div className="Signup">
        <h1>Sign Up</h1>
        <form>
            <input type={'email'} placeholder={'Email'}/>
            <input type={'password'} placeholder={'Password'}/>
            <input type={'password'} placeholder={'Confirm'}/>

            <button className="button">Sign Up</button>

        </form>
    
    </div>
    );

}
export default Signup;