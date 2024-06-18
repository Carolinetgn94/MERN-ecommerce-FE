import React, { useEffect } from "react";
import Login from "../../components/Login/Login";
import { Link, useNavigate } from "react-router-dom";
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
        <Link to="/">
          <img src={logo} alt="Shopalooza Logo" className="login-logo-image" />
        </Link>
      </div>
      <Login />
    </div>
  );
}

export default LoginPage;
