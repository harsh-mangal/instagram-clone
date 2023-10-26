import React from "react";
import logo from "../img/logo.png";
import '../components/signup.css'
import Footer from "./Footer";
const signup = () => {
  return (
    <div>
      <div className="signup-menu">
        <img src={logo} alt="" />
        <h5>Sign up to see photos and videos from your friends.</h5>
        <button>Log in with Facebook</button>
        <h6>OR</h6>
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
      <div>
        <p>Have an account? Login</p>
      </div>
      <Footer/>
    </div>
  );
};

export default signup;
