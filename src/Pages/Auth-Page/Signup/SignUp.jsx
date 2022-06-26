// import "./sign-up.css";
import {Link} from "react-router-dom";
import React from 'react';
import {useAuth} from "../../../Context/Auth-context";


function SignUp() {
    const {setIsLoggedIn}=useAuth();

    const loginHandler=()=>{
        setIsLoggedIn(true)
    }
    return (
        <div className="upper">
          <div className="login-main-container">
            <div className="left-side-section">
              <img className="login-pic" src="./loginpic.svg" alt="" />
              <Link to="/Login">
                <button className="create-account-btn">Allready Have Account</button>
              </Link>
            </div>
            <div className="right-side-section">
              <h1>Sign-Up</h1>
              <input className="log-in-input" type="text" placeholder="Enter Your Name" />
              <input className="log-in-input" type="text" placeholder="Enter Your E-mail" />
              <input className="log-in-input" type="text" placeholder="Enter Your password" />
              <input className="log-in-input" type="text" placeholder="Confirm Your password" />
              <button onClick={()=>loginHandler()}  className="login-page-btn">SUBMIT</button>
            </div>
          </div>
        </div>
      );
    }
    

export {SignUp}