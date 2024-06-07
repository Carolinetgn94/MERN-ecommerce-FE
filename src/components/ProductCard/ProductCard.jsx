import "./ProductCard.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  AiFillHeart,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import ProductDetails from "../ProductDetails/ProductDetails";

function ProductCard({ data }) {
  const [click, setClick] = useState(false);
  const [view, setView] = useState(false);

  function addToCartHandler() {
    console.log("added to cart");
  }

  return (
    <div className="productCardContainer">
      <div className="productImage">
        <Link to={`/product/${data.name}`}>
          {/* <img src={data.image_Url[0].url} alt="" /> */}
        </Link>
      </div>
      <div className="shopName">
       
          <h5>{data.shop.name}</h5>

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
            onClick={addToCartHandler}
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
