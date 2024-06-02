import { useSelector } from "react-redux";
import "./ProfileInfo.css";
import React, { useState } from "react";
import { AiOutlineCamera, AiOutlineDelete } from "react-icons/ai";

function ProfileInfo({ active }) {
  const { user } = useSelector((state) => state.user);
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber);

  function handleSubmit(e) {
    e.preventDefault();
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
