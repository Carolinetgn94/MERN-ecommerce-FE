import { useDispatch, useSelector } from "react-redux";
import "./ProfileInfo.css";
import React, { useEffect, useState } from "react";
import { AiOutlineCamera, AiOutlineDelete } from "react-icons/ai";
import {
  deleteUserAddress,
  loadUser,
  updatUserAddress,
  updateUserInformation,
} from "../../redux/actions/user.action";
import { toast } from "react-toastify";
import axios from "axios";
import { beServer } from "../../server";
import { RxCross1 } from "react-icons/rx";
import { Country } from "country-state-city";

function ProfileInfo({ active }) {
  const { user, error, successMessage } =
    useSelector((state) => state.user);
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber);
  const [password, setPassword] = useState(user && user.email);
  const [avatar, setAvatar] = useState(null);
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
  }, [error, successMessage, dispatch]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateUserInformation(name, email, phoneNumber, password));
    toast.success("Information updated!");
  }

  async function handleImage(e) {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
        axios
          .put(
            `${beServer}/user/update-avatar`,
            { avatar: reader.result },
            {
              withCredentials: true,
            }
          )
          .then((response) => {
            dispatch(loadUser());
            toast.success("avatar updated successfully!");
          })
          .catch((error) => {
            toast.error(error);
          });
      }
    };

    reader.readAsDataURL(e.target.files[0]);
}

    // const file = e.target.files[0];
    // setAvatar(file);

    // const formData = new FormData();

    // formData.append("image", e.target.files[0]);

    // await axios
    //   .put(`${beServer}/user/update-avatar`, formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //     withCredentials: true,
    //   })
    //   .then((response) => {
    //     // window.location.reload();
    //     dispatch(loadUser());
    //     toast.success("Avatar Updated Successfully")
    //   })
    //   .catch((error) => {
    //     toast.error(error);
    //   });
  

  return (
    <div className="contentContainer">
      {active === 1 && (
        <div className="profileSection">
          <div className="profilePic">
            <img src={`${user?.avatar?.url}`} alt="Profile" />
            <input
              type="file"
              id="image"
              className="hidden"
              onChange={handleImage}
            />
            <AiOutlineCamera
              htmlFor="image"
              className="cameraIcon"
              onClick={() => document.getElementById("image").click()}
            />
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
                <label>Enter Your Password</label>
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
       {active === 4 && (
        <div>
          <ChangePassword />
        </div>
      )}
    </div>
  );
}

function Address() {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState();
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [addressType, setAddressType] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const addressTypeData = [
    {
      name: "Default",
    },
    {
      name: "Home",
    },
    {
      name: "Office",
    },
  ];

  async function handleSubmit(e) {
    e.preventDefault();

    if (country === "" || city === "") {
      toast.error("Please fill all the fields!");
    } else {
      dispatch(
        updatUserAddress(
          country,
          city,
          address1,
          address2,
          postalCode,
          addressType
        )
      );
      setOpen(false);
      setCountry("");
      setCity("");
      setAddress1("");
      setAddress2("");
      setPostalCode(null);
      setAddressType("");
    }
  }

  function handleDelete(item) {
    const id = item._id;
    dispatch(deleteUserAddress(id));
  }

  return (
    <div className="addressContent">
      {open && (
        <div className="createAddressForm">
          <div className="formContainer">
            <div className="closeForm">
              <RxCross1 size={30} onClick={() => setOpen(false)} />
            </div>
            <div>
              <h1>Add New Address</h1>
            </div>
            <>
              <form onSubmit={handleSubmit}>
                <div className="newAddressInfo">
                  <label>Country</label>
                  <select
                    name=""
                    id=""
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="">Choose Your Country</option>
                    {Country &&
                      Country.getAllCountries().map((item) => (
                        <option
                          className="block pb-2"
                          key={item.isoCode}
                          value={item.isoCode}
                        >
                          {item.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="newAddressInfo">
                  <label>City</label>
                  <input
                    type="city"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="newAddressInfo">
                  <label>Address 1</label>
                  <input
                    type="address"
                    required
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                </div>
                <div className="newAddressInfo">
                  <label>Address 2</label>
                  <input
                    type="address"
                    required
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                  />
                </div>
                <div className="newAddressInfo">
                  <label>Postal Code</label>
                  <input
                    type="number"
                    required
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
                <div className="newAddressInfo">
                  <label>Address Type</label>
                  <select
                    name=""
                    id=""
                    value={addressType}
                    onChange={(e) => setAddressType(e.target.value)}
                  >
                    <option value="">Choose Address Type</option>
                    {addressTypeData &&
                      addressTypeData.map((item) => (
                        <option key={item.name} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="submitNewAddressButton">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </>
          </div>
        </div>
      )}

      <div className="headerRow">
        <div className="addressTitle">
          <h1>My Addresses</h1>
        </div>
        <div className="addAddressButton" onClick={() => setOpen(true)}>
          <button>Add New</button>
        </div>
      </div>
      <br />
      <div className="addressesList">
        {user &&
          user.addresses.map((item, index) => (
            <div className="addressRow" key={index}>
              <div className="addressDetails">
                <div className="addressType">
                  <h5>{item.addressType}</h5>
                </div>
                <div className="addressText">
                  <h6>
                    {item.address1} {item.address2}
                  </h6>
                  <h6>
                    {item.city}, {item.country}
                  </h6>
                  <h6>{item.postalCode}</h6>
                </div>
                <div className="phoneNumber">
                  <h6>{user && user.phoneNumber}</h6>
                </div>
                <div className="deleteIcon">
                  <AiOutlineDelete
                    size={25}
                    onClick={() => handleDelete(item)}
                  />
                </div>
              </div>
            </div>
          ))}
          {user && user.addresses.length === 0 && (
        <h5>
          You have no saved address!
        </h5>
      )}
      </div>
    </div>
  );
}


function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  async function passwordChangeHandler(e) {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${beServer}/user/update-user-password`,
        { oldPassword, newPassword, confirmPassword },
        { withCredentials: true }
      );
      const { success } = response.data;
      toast.success(success);
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Old Password is wrong";
      toast.error(errorMessage);
    }
  }

  return(
    <div className="changePwSection">
      <div className="changePwHeader">
        <h1>Change Password</h1>
      </div>
      <div className="changePwForm">
        <form onSubmit={passwordChangeHandler}>
          <div className="updatePwField">
            <label>Enter your old password</label>
            <input 
             type="password"
             value={oldPassword}
             onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="updatePwField">
            <label>Enter your new password</label>
            <input 
             type="password"
             value={newPassword}
             onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="updatePwField">
            <label>Confirm your new password</label>
            <input 
             type="password"
             value={confirmPassword}
             onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="updatePwButton">
            <button type="submit">Update</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default ProfileInfo;
