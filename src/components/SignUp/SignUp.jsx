import "./SignUp.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { beServer } from "../../server";
import { toast } from "react-toastify";


function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const navigate = useNavigate();

  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(file);
      setAvatarFile(file);
    }
  }
 

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    if (avatarFile) {
      formData.append("avatar", avatarFile);
    }

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const res = await axios.post(`${beServer}/user/create-user`, formData, config);
  
      toast.success(res.data.message);
      setName("");
      setEmail("");
      setPassword("");
      setAvatar(null);
      setAvatarFile(null);
      if (res.data.success) {
        navigate("/login");
        toast.success("Please login");
      }
    } catch (err) {
      toast.error(err.response.data.message || "Something went wrong!");
      console.error(err);
    }
  }

  return (
    <div className="UserSignUp-Page">
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
                {avatar ? (
                  <img
                    src={avatar}
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
