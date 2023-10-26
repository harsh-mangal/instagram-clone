import React from "react";
import "./HomeDiv.css";
import ss from "../img/ss.jpg";
import logo from "../img/logo.png";
import { Link } from 'react-router-dom';
import Footer from "./Footer";

export const HomeDiv = () => {
  return (
    <div>
    <div className="home-div"> {/* Apply the 'home-div' class to the containing div */}
      <img src={ss} alt="" />
      <div>
        <div className="login-menu"> {/* Apply the 'login-menu' class */}
          <img src={logo} alt="" className="insta-logo" /> {/* Apply the 'insta-logo' class */}
          <input
            type="text"
            placeholder="Phone number, username, or email Address"
          />
          <input type="password" placeholder="Password" />
          <button>Log in</button>

          <h4>OR</h4>
          <a href="/" className="fp"> {/* Apply the 'fp' class */}
            Forgotten your Password?
          </a>
        </div>
        <div className="login-menu-2"> {/* Apply the 'login-menu-2' class */}
          <p>
            Don't have an account? <span><Link to='/signup'>Sign Up</Link></span>
          </p>
        </div>
      </div>
     
    </div>
    <Footer />
     </div>
  );
};
