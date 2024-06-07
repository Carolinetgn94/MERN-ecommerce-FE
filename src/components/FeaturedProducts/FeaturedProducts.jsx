import React, { useEffect, useState } from "react";
import { productData } from "../../seedData";
import ProductCard from "../ProductCard/ProductCard";
import "./FeaturedProducts.css";
import { useSelector } from "react-redux";


function FeaturedProduct() {
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);

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
      {
            allProducts && allProducts.length !== 0 &&(
              <>
               {allProducts && allProducts.map((i, index) => <ProductCard data={i} key={index} />)}
              </>
            )
           }
      </div>
    </div>
  );
}

export default FeaturedProduct;
