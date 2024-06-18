import React from "react";
import SignUp from "../../components/SignUp/SignUp";
import logo from "../../assets/Shopalooza-logo.png";
import "./SignUpPage.css";
import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <div className="SignUp-Page">
      <div className="signup-logo">
        <Link to="/">
          <img src={logo} alt="Shopalooza Logo" className="signup-logo-image" />
        </Link>
      </div>
      <SignUp />
    </div>
  );
}

export default SignUpPage;
