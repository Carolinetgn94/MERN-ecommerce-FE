import React, { useEffect, useState } from "react";
import { productData } from "../../seedData";
import ProductCard from "../ProductCard/ProductCard";
import "./FeaturedProducts.css";

function FeaturedProduct() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const pData = productData;
    setData(pData);
  }, []);

  return (
    <div className="featuredSection">
      <div className="featuredtitle">
        <h1>Featured Products</h1>
      </div>
      <div className="productSection">
        {data &&
          data.map((i, index) => {
            return <ProductCard data={i} key={index} />;
          })}
      </div>
    </div>
  );
}

export default FeaturedProduct;
