import "./ProductCard.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

function ProductCard() {
  const [click, setClick] = useState(false);

  function addToCartHandler() {
    console.log('added to cart');
  }

  return (
    <div className="productCardContainer">
      <div className="productImage">
        <Link to="/product/${product.title}">
          <img
            src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </Link>
      </div>
      <div className="shopName">
        <Link to="/">
          <h5>Apple Store</h5>
        </Link>
      </div>
      <div className="productName">
        <h4>Apple Super Camera</h4>
      </div>
      <div className="productPrice">
        <h4>$1299</h4>
      </div>
      <div className="favIcon">
        {click ? (
          <AiFillHeart
            size={22}
            onClick={() => setClick(!click)}
            color={click ? "red" : "#333"}
            title="Remove from wishlist"
          />
        ) : (
          <AiOutlineHeart
            size={22}
            onClick={() => setClick(!click)}
            color={click ? "red" : "#333"}
            title="Add to wishlist"
          />
        )}
      </div>
      <div className="cartIcon">
            <AiOutlineShoppingCart
            size={25}
            onClick={addToCartHandler}
            color="#444"
            title="Add to cart"
            />
      </div>

    </div>
  );
}

export default ProductCard;
