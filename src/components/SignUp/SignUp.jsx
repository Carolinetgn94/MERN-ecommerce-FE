import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { beServer } from "../../server";


function SignUp() {
  
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const [visible, setVisible] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(null);


  function handleImageUpload(e) {
    const file = e.target.files[0];
    setUserInfo((prevState) => ({ ...prevState, avatar: file }));
    setAvatarPreview(URL.createObjectURL(file));
    // const reader = new FileReader();

    // reader.onload = () => {
    //   setUserInfo((prevState) => ({ ...prevState, avatar: reader.result}));
    // };

    // reader.readAsDataURL(file);
  }
  

  function handleChange(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value, error: "" });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const newForm = new FormData();
    newForm.append("file", userInfo.avatar);
    newForm.append("name", userInfo.name);
    newForm.append("email", userInfo.email);
    newForm.append("password", userInfo.password);

  
    axios
      .post(`${beServer}/user/create-user`, newForm, config)
      .then((res) => {
        if(res.data.success === true) {
          navigate("/");
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="SignUp-Page">
      <div className="SignUp-Container">
        <h2 className="SignUp-Title">Register A Free Account</h2>
        <form className="SignUp-Form" onSubmit={handleSubmit}>
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
            <label className="file-input">
              <span className="avatar-container">
                {avatarPreview ? (
                  <img
                    src={avatarPreview}
                    alt="avatar"
                    className="avatar-image"
                  />
                ) : (
                  <RxAvatar className="avatar-image" />
                )}
              </span>
              Upload a Profile Picture
              <input
                className="file-upload"
                type="file"
                name="avatar"
                id="file-input"
                accept=".jpg,.jpeg,.png"
                onChange={handleImageUpload}
              />
            </label>
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
