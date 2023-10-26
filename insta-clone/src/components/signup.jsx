import React from "react";
import logo from "../img/logo.png";
import '../components/signup.css'
import Footer from "./Footer";
import {Link} from 'react-router-dom'
const Signup = () => {
  return (
    <div>
      <div className="signup-menu">
        <img src={logo} alt="" />
        <h5>Sign up to see photos and videos from your friends.</h5>
        <button>Log in with Facebook</button>
        <center><h6>OR</h6></center>
        <input type="text" placeholder="Mobile number or email addresss" />
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <p>
          People who use our service may have uploaded your contact information
          to Instagram. Learn more
        </p>
        <p>
          By signing up, you agree to our Terms , PrivacyPolicy and Cookies
          Policy.
        </p>
        <button>Sign Up</button>
      </div>
      <div className="signup-menu-2">
        <p>Have an account? <span><Link to='/'>Log in</Link></span></p>
      </div>
      <Footer/>
    </div>
  );
};

export default Signup;

