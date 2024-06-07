import React, { useEffect, useState } from "react";
import { productData } from "../../seedData";
import ProductCard from "../ProductCard/ProductCard";
import "./FeaturedProducts.css";
import { useSelector } from "react-redux";


function FeaturedProduct() {
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);

  const topProducts = allProducts ? allProducts.slice(0, 4) : [];

  // useEffect(() => {
  //   const pData = allproducts;
  //   setData(pData);
  // }, []);

  return (
    <div className="featuredSection">
      <div className="featuredtitle">
        <h1>Featured Products</h1>
      </div>
      <div className="productSection">
      {topProducts && topProducts.length !== 0 && (
          <>
            {topProducts.map((product, index) => (
              <ProductCard data={product} key={index} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default FeaturedProduct;
