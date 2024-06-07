import { RxCross1 } from "react-icons/rx";
import "./ProductDetails.css";
import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function ProductDetails({ setView, data }) {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);

  function decrementCount() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div className="productDetailsContainer">
      <div className="productDetailsBox">
        <div className="closeButton">
          <RxCross1 size={30} onClick={() => setView(false)} />
          <div className="productSmallDetails">
            {/* <img
              className="productDetailsImage"
              src={data.image_Url[0].url}
              alt=""
            />
            <img
              className="shopAvatar"
              src={data.shop.shop_avatar.url}
              alt=""
            /> */}
            <h5 className="popUpshopName">{data.shop.name}</h5>
          </div>
          <div className="popUpproductDescription">
            <div className="popUpproductName">
              <h1>{data.name}</h1>
            </div>
            <div className="popUpproductSummary">
              <p>{data.description}</p>
            </div>
            <div className="popUpproductPrice">
              <h4>$ {data.price}</h4>
            </div>
          </div>
          <div className="minicartContainer">
            <div className="cartSection">
              <button className="decrementBtn" onClick={decrementCount}>
                -
              </button>
              <span>{count}</span>
              <button className="incrementBtn" onClick={incrementCount}>
                +
              </button>
            </div>
            <div className="popUpfavIcon">
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
            <div className="popUpcartButton">
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
