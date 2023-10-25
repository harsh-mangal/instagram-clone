import React from "react";
import "./HomeDiv.css";
import ss from "../img/ss.jpg";
import logo from "../img/logo.png";
export const HomeDiv = () => {
  return (
    <div className="home">
      <img src={ss} alt="" />
      <div>
        <div className="login-menu">
          <img src={logo} alt=""  className="insta-logo"/>
          <input
            type="text"
            placeholder="Phone number , username or email Address"
          />
          <input type="password" placeholder="Password" />
          <button>Log in</button>

          <h4>OR</h4>
          <a href="/" className="fp">
            Forgotten your Password ?
          </a>
        </div>
        <div className="login-menu-2">
          <p>
            Don't have an account? <a href="/">Signup</a>
          </p>
        </div>
      </div>
    </div>
  );
};
