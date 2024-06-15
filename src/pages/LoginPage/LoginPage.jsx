import React, { useEffect } from "react";
import Login from "../../components/Login/Login";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/Shopalooza-logo.png";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="Login-Page">
      <div className="login-logo">
        <img src={logo} alt="Shopalooza Logo" className="login-logo-image" />
      </div>
      <Login />
    </div>
  );
}

export default LoginPage;
