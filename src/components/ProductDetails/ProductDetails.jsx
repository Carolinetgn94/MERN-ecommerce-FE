import { RxCross1 } from "react-icons/rx";
import "./ProductDetails.css";
import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cart.action";
import { toast } from "react-toastify";
import { addToWishlist, removeFromWishlist } from "../../redux/actions/wishlist.action";

function ProductDetails({ setView, data }) {
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist]);

  function removeFromWishlistHandler(data) {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  }

  function addToWishlistHandler(data) {
    setClick(!click);
    dispatch(addToWishlist(data));
  }



  return (
    <div className="productDetailsContainer">
      <div className="productDetailsBox">
        <div className="closeButton">
          <RxCross1 size={30} onClick={() => setView(false)} />
          <div className="productSmallDetails">
            <img
              className="productDetailsImage"
              src={data.images[0]} 
              alt={data.name}
            />
            <img
              className="popupShopAvatar"
              src={data.shopId.avatar}
              alt=""
            />
            <h5 className="popUpshopName">{data.shopId.name}</h5>
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
            <div className="popUpcartButton">
              <button onClick={() => addToCartHandler(data._id)}>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
