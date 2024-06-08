import { useDispatch, useSelector } from "react-redux";
import "./ProfileInfo.css";
import React, { useEffect, useState } from "react";
import { AiOutlineCamera, AiOutlineDelete } from "react-icons/ai";
import { updateUserInformation } from "../../redux/actions/user.action";
import { toast } from "react-toastify";
import axios from "axios";
import { beServer } from "../../server";

function ProfileInfo({ active }) {
  const { user, error, successMessage } = useSelector((state) => state.user);
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber);
  const [password, setPassword] = useState(user && user.email);
  const [avatar, setAvatar] = useState(null)
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch({ type: "clearMessages" });
    }
  }, [error, successMessage]);


  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateUserInformation(name, email, phoneNumber, password));
    toast.success("Information updated!");
  }

  async function handleImage(e) {
    const file = e.target.files[0];
    setAvatar(file);

    const formData = new FormData();

    formData.append("image", e.target.files[0]);

    await axios.put(`${beServer}/user/update-avatar`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    }).then((response) => {
      window.location.reload();
    }).catch((error) => {
      toast.error(error);
    });
  }

  return (
    <div className="contentContainer">
      {active === 1 && (
        <div className="profileSection">
          <div className="profilePic">
            <img
              src={user?.avatar || "placeholder-image-url"}
              alt="Profile"
            />
            <input type="file" id="image" className="hidden" onChange={handleImage}/>
            <AiOutlineCamera htmlFor="image" className="cameraIcon" onClick={() => document.getElementById('image').click()}/>
          </div>
          <div className="profileForm">
            <form onSubmit={handleSubmit}>
              <div className="profileName">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="profileEmail">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="profilePhoneNumber">
                <label htmlFor="number">Phone Number</label>
                <input
                  type="number"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="insertPassword">
                <label >Enter Your Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input required value="Update" type="submit" />
            </form>
          </div>
        </div>
      )}

      {active === 2 && (
        <div>
          <Address />
        </div>
      )}
    </div>
  );
}

function Address() {
  return (
    <div className="addressContent">
      <div className="headerRow">
        <div className="addressTitle">
          <h1>My Addresses</h1>
        </div>
        <div className="addAddressButton">
          <button>Add New</button>
        </div>
      </div>

      <div className="defaultAddress">
        <h5>Default Address</h5>
        <h6>pasir ris st 32</h6>
        <div>
          <AiOutlineDelete size={25} />
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
