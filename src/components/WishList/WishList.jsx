import "./WishList.css";
import { RxCross1 } from "react-icons/rx";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../redux/actions/wishlist.action";
import { addToCart } from "../../redux/actions/cart.action";
import { toast } from "react-toastify";

function WishList({ setOpenWishList }) {
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  function removeFromWishlistHandler(data) {
    dispatch(removeFromWishlist(data));
  }

  const addToCartHandler = (data) => {
    const newData = { ...data, qty: 1 };
    dispatch(addToCart(newData));
    toast.success("Item added to cart!");
    setOpenWishList(false);
  };

  return (
    <div className="cartContainer">
      <div className="closeButton">
        <RxCross1 size={25} onClick={() => setOpenWishList(false)} />
      </div>
      <div className="cartItemsQty">
        <AiOutlineHeart className="cartIcon" size={25} />
        <h5> {wishlist && wishlist.length} Items</h5>
      </div>
      <br />
      <div className="cartItemsSection">
        {wishlist &&
          wishlist.map((i, index) => (
            <CartItemCard
              key={index}
              data={i}
              removeFromWishlistHandler={removeFromWishlistHandler}
              addToCartHandler={addToCartHandler}
            />
          ))}
      </div>
    </div>
  );
}

function CartItemCard({ data, removeFromWishlistHandler, addToCartHandler }) {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;

  return (
    <div className="wishlistItemCard">
      <div className="wishlistProductImage">
        <img src={data.images[0]} alt={data.name} />
      </div>
      <div className="wishlistProductDetails">
        <h4>{data.name}</h4>
        <h4 className="wishlistItemPrice">$ {totalPrice} </h4>
      </div>
      <div className="wishlistButtons">
        <div className="addToCart Wishlist">
        <BsCartPlus
          size={30}
          title="Add to Cart"
          onClick={() => addToCartHandler(data)}
        />
      </div>
      <div className="removeItem Wishlist">
        <h4 onClick={() => removeFromWishlistHandler(data)}>Remove</h4>
      </div>
      </div>
      
    </div>
  );
}

export default WishList;
