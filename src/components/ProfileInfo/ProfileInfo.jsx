import { useDispatch, useSelector } from "react-redux";
import "./ProfileInfo.css";
import React, { useEffect, useState } from "react";
import { AiOutlineCamera, AiOutlineDelete } from "react-icons/ai";
import { updateUserInformation } from "../../redux/actions/user.action";
import { toast } from "react-toastify";

function ProfileInfo({ active }) {
  const { user, error, successMessage } = useSelector((state) => state.user);
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber);
  const [password, setPassword] = useState(user && user.email);
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

  return (
    <div className="contentContainer">
      {active === 1 && (
        <div className="profileSection">
          <div className="profilePic">
            <img
              src={user?.avatar?.url || "placeholder-image-url"}
              alt="Profile"
            />
            <AiOutlineCamera className="cameraIcon" />
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
