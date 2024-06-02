import React, { useEffect, useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import "./MainProductDetails.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function MainProductDetails({ data }) {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();



  function decrementCount() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div className="mainProductSection">
      {data ? (
        <div className="productContainer">
          <div className="mainProductImage">
            <img src={data?.image_Url[0].url} alt="" />
          </div>
          <div className="mainProductName">
            <h1>{data.name}</h1>
          </div>
          <div className="mainDescription">
            <p>{data.description}</p>
          </div>
          <div className="productShopDetails">
            <img
              className="shopAvatar"
              src={data.shop.shop_avatar.url}
              alt=""
            />
            <h5 className="shopName">{data.shop.name}</h5>
            <div >
            <Link to="/" className="shopLink">
                <button className="shopButton">Visit Shop</button>
            </Link>
            </div>
          </div>
          <div className="mainProductPrice">
            <h4>$ {data.price}</h4>
          </div>
          <div className="cartSection">
              <button className="decrementBtn" onClick={decrementCount}>
                -
              </button>
              <span>{count}</span>
              <button className="incrementBtn" onClick={incrementCount}>
                +
              </button>
            </div>
            <div className="favIcon">
              {click ? (
                <AiFillHeart
                  size={28}
                  onClick={() => setClick(!click)}
                  color={click ? "red" : "#333"}
                  title="Remove from wishlist"
                />
              ) : (
                <AiOutlineHeart
                  size={28}
                  onClick={() => setClick(!click)}
                  color={click ? "red" : "#333"}
                  title="Add to wishlist"
                />
              )}
            </div>
            <div className="cartButton">
              <button>Add To Cart</button>
            </div>
        </div>
      ) : null}
    </div>
  );
}

export default MainProductDetails;
