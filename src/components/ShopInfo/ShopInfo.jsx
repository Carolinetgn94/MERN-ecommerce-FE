import { useSelector } from "react-redux";
import "./ShopInfo.css";
import { Link, useNavigate } from "react-router-dom";
import { beServer } from "../../server";
import axios from "axios";
import { toast } from "react-toastify";

function ShopInfo({ isOwner }) {
  const { seller } = useSelector((state) => state.seller);
  const navigate = useNavigate();

  async function logoutHandler() {
    axios.get(`${beServer}/shop/logout`, {
      withCredentials: true}).then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/shop-login")
      });
    // window.location.reload();
  }

  return (
    <div className="shopInfoContainer">
      <div className="shopInfoHeader">
        <div className="shopInfoTitle">
          <h2>Hello, {seller.name}</h2>
        </div>
        <div className="shopInfoDescription">
          <p>{seller.description}</p>
        </div>
      </div>
      <div className="shopInfoDetails">
        <div className="shopInfo">
          <h5>Address</h5>
          <h4>{seller.address}</h4>
        </div>
        <div className="shopInfo">
          <h5>Phone Number</h5>
          <h4>{seller.phoneNumber}</h4>
        </div>
        <div className="shopInfo">
          <h5>Total Products</h5>
          <h4>6</h4>
        </div>
        <div className="shopInfo">
          <h5>Joined On</h5>
          <h4>{seller.createdAt?.slice(0, 10)}</h4>
        </div>
      </div>
      {isOwner && (
        <div className="buttons">
          <Link to="/settings">
            <button className="editButton">Edit Shop</button>
          </Link>

          <button className="logOutButton" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default ShopInfo;
