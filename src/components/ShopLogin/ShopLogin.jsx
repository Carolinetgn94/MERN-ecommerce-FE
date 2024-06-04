import "./ShopLogin.css";
import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {beServer} from "../../server";
import axios from "axios"
import { toast } from "react-toastify";

function ShopLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${beServer}/shop/login-shop`,{
        email: email,
        password: password,
    }, {withCredentials: true}).then((res)=> {
        toast.success("Login Sucess");
        navigate("/dashboard");
        window.location.reload(true);
    })
    .catch((err)=> {
        alert("Login failed")
    })
  }

  return (
    <div className="Login-Page">
      <div className="Login-Container">
        <h2 className="Login-Title">Login To Your Shop Account</h2>
        <form className="Login-Form" onSubmit={handleSubmit}>
          <div email-input>
            <label>Email </label>
            <input className="InputBox"
              type="email"
              name="email"
              placeholder="e.g john@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="password-input">
            <label>Password </label>
            <div className="password-input-wrapper">
              <input className="InputBox"
                type={visible ? "text" : "password"}
                name="password"
                placeholder="Enter Password "
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              
              {visible ? (
                <AiOutlineEye onClick={() => setVisible(false)} />
              ) : (
                <AiOutlineEyeInvisible onClick={() => setVisible(true)} />
              )}
              
            </div>
          </div>
          <div className="submit-button">
            <button type="submit">Login</button>
          </div>
          <div className="sign-up-link">
            <h5>Don't have an account?</h5>
            <Link to="/create-shop">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ShopLogin;