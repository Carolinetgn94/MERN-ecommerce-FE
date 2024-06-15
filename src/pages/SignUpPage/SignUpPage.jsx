import React from "react";
import SignUp from "../../components/SignUp/SignUp";
import logo from "../../assets/Shopalooza-logo.png";
import "./SignUpPage.css";



function SignUpPage () {
    return (
        <div className="SignUp-Page">
             <div className="signup-logo">
        <img src={logo} alt="Shopalooza Logo" className="signup-logo-image" />
      </div>
           <SignUp/>
        </div>
        )
}

export default SignUpPage;