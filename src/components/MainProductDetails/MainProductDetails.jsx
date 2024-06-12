import React, { useEffect, useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import "./MainProductDetails.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cart.action";
import { addToWishlist, removeFromWishlist } from "../../redux/actions/wishlist.action";
import { toast } from "react-toastify";

function MainProductDetails({ data }) {
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist]);

  function decrementCount() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function incrementCount() {
    setCount(count + 1);
  }

  function addToCartHandler(id) {
    
    const isItemExists = cart && cart.find((i) => i._id === id);

    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      const cartData = {...data, qty: count};
      dispatch(addToCart(cartData));
      toast.success("Item added to cart!")
    }
  }

 

  function removeFromWishlistHandler(data) {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  }

  function addToWishlistHandler(data) {
    setClick(!click);
    dispatch(addToWishlist(data));
  }

  return (
    <div className="mainProductSection">
      {data ? (
        <div className="productContainer">
          <div className="mainProductImage">
            <img src={data.images[0]} alt={data.name} />
          </div>
          <div className="mainProductName">
            <h1>{data.name}</h1>
          </div>
          <div className="mainDescription">
            <p>{data.description}</p>
          </div>
          <div className="productShopDetails">
            {/* <img
              className="shopAvatar"
              src={data.shop.shop_avatar.url}
              alt=""
            /> */}
            <h5 className="shopName">{data.shop.name}</h5>
            {/* <div >
            <Link to="/" className="shopLink">
                <button className="shopButton">Visit Shop</button>
            </Link>
            </div> */}
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
                  onClick={() => removeFromWishlistHandler(data)}
                  color={click ? "red" : "#333"}
                  title="Remove from wishlist"
                />
              ) : (
                <AiOutlineHeart
                  size={28}
                  onClick={() => addToWishlistHandler(data)}
                  color={click ? "red" : "#333"}
                  title="Add to wishlist"
                />
              )}
            </div>
            <div className="cartButton">
              <button onClick={() => addToCartHandler(data._id)}>Add To Cart</button>
            </div>
        </div>
      ) : null}
    </div>
  );
}

export default MainProductDetails;
