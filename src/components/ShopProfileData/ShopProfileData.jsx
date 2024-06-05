import { useState } from "react";
import { productData } from "../../seedData";
import ProductCard from "../ProductCard/ProductCard";
import "./ShopProfileData.css";
import { Link } from "react-router-dom";

function ShopProfileData({ isOwner }) {
  const [active, setActive] = useState(1);

  return (
    <div className="ShopProfileContainer">
      <div className="shopProfileHeader">
        <button className="shopProductsButton">My Shop Products</button>
        {isOwner && (
          <div className="goDashboard">
            <Link to="/dashboard">
              <button className="dashboardButton" onClick={() => setActive(1)}>
                Go Dashboard
              </button>
            </Link>
          </div>
        )}
      </div>

      <br />
      <div className="shopProductsDisplay">
        {productData &&
          productData.map((i, index) => (
            <ProductCard data={i} key={index} isShop={true} />
          ))}
      </div>
    </div>
  );
}

export default ShopProfileData;
