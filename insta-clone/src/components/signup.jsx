import React from "react";
import logo from "../img/logo.png";
import "../components/signup.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div>
      <div className="signup-menu">
        <img src={logo} alt="" />
        <h5>Sign up to see photos and videos from your friends.</h5>
        <button className="fbb">
          <span>
            <i class="fa-brands fa-square-facebook"></i>{" "}
          </span>
          &nbsp; Log in with Facebook
        </button>
        <center>
          <h6>OR</h6>
        </center>
        <input type="text" placeholder="Mobile number or email addresss" />
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <p>
          People who use our service may have uploaded your contact information
          to Instagram.{" "}
          <span>
            <Link to="https://www.facebook.com/help/instagram/261704639352628">
              Learn more.
            </Link>
          </span>
        </p>
        <p>
          By signing up, you agree to our{" "}
          <span>
            <Link to="https://help.instagram.com/581066165581870/?locale=en_GB">
              Terms
            </Link>
          </span>{" "}
          ,{" "}
          <span>
            <Link to="https://www.facebook.com/privacy/policy">
              Privacy Policy
            </Link>
          </span>{" "}
          and{" "}
          <span>
            <Link to="https://privacycenter.instagram.com/policies/cookies/">
              Cookies Policy.
            </Link>
          </span>
        
        </p>
        <button>Sign Up</button>
      </div>
      <div className="signup-menu-2">
        <p>
          Have an account?{" "}
          <span>
            <Link to="/">Log in</Link>
          </span>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
