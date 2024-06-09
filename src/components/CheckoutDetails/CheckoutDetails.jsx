import "./CheckoutDetails.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Country } from "country-state-city";

const CheckoutDetails = () => {
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [userInfo, setUserInfo] = useState(false);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [postalCode, setPostalCode] = useState(null);
  const [price, setPrice] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const paymentSubmit = () => {
    if (address1 === "" || address2 === "" || postalCode === null || country === "" || city === "") {
      toast.error("Please choose your delivery address!");
    } else {
      const shippingAddress = {
        address1,
        address2,
        postalCode,
        country,
        city,
      };

      const orderData = {
        cart,
        totalPrice,
        subTotalPrice,
        shipping,
        price,
        shippingAddress,
        user,
      };

      localStorage.setItem("latestOrder", JSON.stringify(orderData));
      navigate("/payment");
    }
  };

  const subTotalPrice = cart.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );

  const shipping = 5;

  const totalPrice = (subTotalPrice + shipping).toFixed(2);

  return (
    <div className="checkout-container">
      <div className="checkout-content">
        <div className="shipping-info">
          <ShippingInfo
            user={user}
            country={country}
            setCountry={setCountry}
            city={city}
            setCity={setCity}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            address1={address1}
            setAddress1={setAddress1}
            address2={address2}
            setAddress2={setAddress2}
            postalCode={postalCode}
            setPostalCode={setPostalCode}
          />
        </div>
        <div className="cart-data">
          <CartData
            totalPrice={totalPrice}
            shipping={shipping}
            subTotalPrice={subTotalPrice}
            setPrice={setPrice}
          />
        </div>
      </div>
      <div className="checkout-button" onClick={paymentSubmit}>
        <button>Go to Payment</button>
      </div>
    </div>
  );
};

const ShippingInfo = ({
  user,
  country,
  setCountry,
  city,
  setCity,
  userInfo,
  setUserInfo,
  address1,
  setAddress1,
  address2,
  setAddress2,
  postalCode,
  setPostalCode,
}) => {
  return (
    <div className="shipping-info-content">
    <h5>Shipping Address</h5>
    <form>
      <div className="shipping-info-field">
        <div className="shipping-info-half">
          <label>Full Name</label>
          <input
            type="text"
            value={user && user.name}
            required
            className="shipping-info-input"
          />
        </div>
        <div className="shipping-info-half">
          <label>Email Address</label>
          <input
            type="email"
            value={user && user.email}
            required
            className="shipping-info-input"
          />
        </div>
      </div>
      <div className="shipping-info-field">
        <div className="shipping-info-half">
          <label>Phone Number</label>
          <input
            type="number"
            required
            value={user && user.phoneNumber}
            className="shipping-info-input"
          />
        </div>
        <div className="shipping-info-half">
          <label>Postal Code</label>
          <input
            type="number"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
            className="shipping-info-input"
          />
        </div>
      </div>
      <div className="shipping-info-field">
        <div className="shipping-info-half">
          <label>Country</label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="shipping-info-input"
          >
            <option value="">Choose your country</option>
            {Country &&
              Country.getAllCountries().map((item) => (
                <option key={item.isoCode} value={item.isoCode}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        <div className="shipping-info-half">
          <label>City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="shipping-info-input"
          />
        </div>
      </div>
      <div className="shipping-info-field">
        <div className="shipping-info-half">
          <label>Address1</label>
          <input
            type="text"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
            required
            className="shipping-info-input"
          />
        </div>
        <div className="shipping-info-half">
          <label>Address2</label>
          <input
            type="text"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
            className="shipping-info-input"
          />
        </div>
      </div>
    </form>
    <h4
      className="shipping-info-choose-address"
      onClick={() => setUserInfo(!userInfo)}
    >
      Choose From Saved Address
    </h4>
    {userInfo && (
      <div>
        {user &&
          user.addresses.map((item, index) => (
            <div className="shipping-info-saved-address" key={index}>
              <input
                type="checkbox"
                className="shipping-info-checkbox"
                value={item.addressType}
                onClick={() =>
                  setAddress1(item.address1) ||
                  setAddress2(item.address2) ||
                  setPostalCode(item.postalCode) ||
                  setCountry(item.country) ||
                  setCity(item.city)
                }
              />
              <h3>{item.addressType}</h3>
            </div>
          ))}
      </div>
    )}
  </div>
  );
};

const CartData = ({ totalPrice, shipping, subTotalPrice }) => {
  return (
    <div className="cart-data-container">
      <div className="cart-data-content">
        <div className="cart-data-row">
          <h5 className="cart-data-label">Subtotal:</h5>
          <h5 className="cart-data-value">${subTotalPrice}</h5>
        </div>
        <div className="cart-data-row">
          <h5 className="cart-data-label">Shipping:</h5>
          <h5 className="cart-data-value">${shipping.toFixed(2)}</h5>
        </div>
        <h5 className="cart-data-label">Total Price:</h5>
        <h5 className="cart-data-total-price">${totalPrice}</h5>
      </div>
    </div>
  );
};

export default CheckoutDetails;

