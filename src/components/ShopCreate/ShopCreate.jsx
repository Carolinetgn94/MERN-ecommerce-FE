import "./ShopCreate.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { beServer } from "../../server";
import { toast } from "react-toastify";

function ShopCreate() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState();
  const [avatar, setAvatar] = useState();
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  function handleImageUpload(e) {
    const file = e.target.files[0];
    setAvatar(file);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const newForm = new FormData();
    newForm.append("file", avatar);
    newForm.append("name", name);
    newForm.append("email", email);
    newForm.append("password", password);
    newForm.append("postalCode", postalCode);
    newForm.append("address", address);
    newForm.append("phoneNumber", phoneNumber);

    axios
      .post(`${beServer}/shop/create-shop`, newForm, config)
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setPassword("");
        setAddress("");
        setPostalCode();
        setAvatar();
        setPhoneNumber();
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  }

  return (
    <div className="SignUp-Page">
      <div className="SignUp-Container">
        <h2 className="SignUp-Title">Register Seller Account</h2>
        <form className="SignUp-Form" onSubmit={handleSubmit}>
          <div className="name-input">
            <label>Shop Name </label>
            <input
              className="InputBox"
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>

          <div className="email-input">
            <label>Shop Email </label>
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

          <div className="phone-input">
            <label>Phone Number </label>
            <input
              className="phoneBox"
              type="number"
              name="phoneNumber"
              placeholder="+65"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></input>
          </div>

          <div className="address-input">
            <label>Address </label>
            <input
              className="address"
              type="text"
              name="address"
              placeholder=""
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </div>

          <div className="postal-input">
            <label>Postal Code </label>
            <input
              className="postal"
              type="number"
              name="postalcode"
              placeholder="e.g 324524"
              required
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
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
                    src={URL.createObjectURL(avatar)}
                    alt="avatar"
                    className="avatar-image"
                  />
                ) : (
                  <RxAvatar className="avatar-image" />
                )}
              </span>
              Upload a Shop Profile Picture
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
            <h5>Already have a seller's account?</h5>
            <Link to="/shop-login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ShopCreate;
