import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {RxAvatar} from "react-icons/rx";

function SignUp() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const [visible, setVisible] = useState(false);

  function handleSubmit() {
    console.log("submit");
  }

  function handleImageUpload(e) {
    const file = e.target.files[0];
    setUserInfo.avatar(file);
  } 

  function handleChange(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value, error: "" });
  }

  return (
    <div className="SignUp-Page">
      <div className="SignUp-Container">
        <h2 className="SignUp-Title">Register A Free Account</h2>
        <form className="SignUp-Form">
          <div name-input>
            <label>Full Name </label>
            <input
              className="InputBox"
              type="text"
              name="name"
              required
              value={userInfo.name}
              onChange={handleChange}
            ></input>
          </div>

          <div email-input>
            <label>Email </label>
            <input
              className="InputBox"
              type="email"
              name="email"
              placeholder="e.g john@email.com"
              required
              value={userInfo.email}
              onChange={handleChange}
            ></input>
          </div>

          <label>Password </label>
          <div className="password-input-wrapper">
            <input
              className="InputBox"
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
        <div className="avatar-section">
            <label></label>
            <span>
                {
                userInfo.avatar ?
                (
                <img src={URL.createObjectURL(userInfo.avatar)} alt="avatar"/>)
                : ( 
                 <RxAvatar className="large-icon"/> 
                )
            }
            </span>
            <label className="file-input">Upload a Profile Picture</label>
            <input className="file-upload"
            type="file"
            name="avatar"
            id="file-input"
            accept=".jpg,.jpeg,.png"
            onChange={handleImageUpload}
            ></input>
        </div>

          <div className="submit-button">
            <button type="submit">Sign Up</button>
          </div>
          <div className="sign-up-link">
            <h5>Already have an account?</h5>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
