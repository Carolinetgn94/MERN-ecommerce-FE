import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {beServer} from "../../server";
import axios from "axios"

function Login() {
    const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    error: "",
  });
  const [visible, setVisible] = useState(false);

  function handleChange(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value, error: "" });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${beServer}/user/login-user`,{
        email: userInfo.email,
        password: userInfo.password,
    }, {withCredentials: true}).then((res)=> {
        alert("Login Sucess");
        navigate("/");
        window.location.reload(true);
    })
    .catch((err)=> {
        alert("Login failed")
    })
  }

  return (
    <div className="Login-Page">
      <div className="Login-Container">
        <h2 className="Login-Title">Login To Your Account</h2>
        <form className="Login-Form" onSubmit={handleSubmit}>
          <div email-input>
            <label>Email </label>
            <input className="InputBox"
              type="email"
              name="email"
              placeholder="e.g john@email.com"
              required
              value={userInfo.email}
              onChange={handleChange}
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
                value={userInfo.password}
                onChange={handleChange}
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
            <Link to="/sign-up">Sign Up</Link>
          </div>
        </form>
      </div>
      <p className="error-message">&nbsp;{userInfo.error}</p>
    </div>
  );
}

export default Login;
