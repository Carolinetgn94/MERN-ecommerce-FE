import "./ProductCard.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import ProductDetails from "../ProductDetails/ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../redux/actions/wishlist.action";
import { addToCart } from "../../redux/actions/cart.action";
import { toast } from "react-toastify";

function ProductCard({ data }) {
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const [click, setClick] = useState(false);
  const [view, setView] = useState(false);
  const dispatch = useDispatch();

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

  function addToCartHandler(id) {
    
    const isItemExists = cart && cart.find((i) => i._id === id);

    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      const cartData = {...data, qty: 1};
      dispatch(addToCart(cartData));
      toast.success("Item added to cart!")
    }
  }


  return (
    <div className="productCardContainer">
      <div className="productImage">
        <Link to={`/product/${data._id}`}> 
          <img src={data.images[0]} alt={data.name} />
        </Link>
      </div>
      <div className="shopName">
       
          <h5>{data.shopId.name}</h5>

      </div>
      <div className="productName">
      <Link to={`/product/${data.name}`}>
        <h4>
          {data.name.length > 25 ? data.name.slice(0, 25) + "..." : data.name}
        </h4>
        </Link>
      </div>
      <div className="productPrice">
        <h4>$ {data.price}</h4>
      </div>
      <div className="iconsSection">
        <div className="favIcon">
          {click ? (
            <AiFillHeart
              size={22}
              onClick={() => removeFromWishlistHandler(data)}
              color={click ? "red" : "#333"}
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={22}
              onClick={() => addToWishlistHandler(data)}
              color={click ? "red" : "#333"}
              title="Add to wishlist"
            />
          )}
        </div>
        <div className="viewIcon">
          <AiOutlineEye
            size={22}
            onClick={() => setView(!view)}
            color="#333"
            title="Quick View"
          />
         
        </div>
        <div className="cartIcon">
          <AiOutlineShoppingCart
            size={25}
            onClick={() => addToCartHandler(data._id)}
            color="#444"
            title="Add to cart"
          />
        </div>
      </div> 
      {view ? <ProductDetails setView={setView} data={data}/> : null}
    </div>
  );
}

export default ProductCard;
