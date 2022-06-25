import React from "react";
import "./login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../Context/Auth-context";

function Login() {
  const { setStatus,isLoggedIn, setIsLoggedIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const loginHandler = () => {
    setStatus(true);
    console.log("clikced")
    setIsLoggedIn((isLoggedIn) => !isLoggedIn);
    navigate(location.state.from.pathname);
  };

  return (
    <div className="upper">
      <div className="login-main-container">
        <div className="left-side-section">
          <img className="login-pic" src="./loginpic.svg" alt="" />
          <Link to="/signup">
            <button className="create-account-btn">Create New Account</button>
          </Link>
        </div>
        <div className="right-side-section">
          <h1>Log-In</h1>
          <input
            className="log-in-input"
            type="text"
            placeholder="Enter Your Name"
          />
          <input
            className="log-in-input"
            type="text"
            placeholder="Enter Your E-mail"
          />
          <input
            className="log-in-input"
            type="text"
            placeholder="Enter Your password"
          />
          <button onClick={() => loginHandler()} className="login-page-btn">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export { Login };
