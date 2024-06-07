import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import { productData } from "../../seedData";
import "./ProductsPage.css";
import React, {useState, useEffect} from 'react';


function ProductsPage() {
    const [data, setData] = useState([]);
    const { allProducts } = useSelector((state) => state.products);


    // useEffect(() => {
    //   const pData = productData;
    //   setData(pData);
    // }, []);

  return (
    <div className="productsPageContainer">
      <div className="headerSection">
        <Header />
      </div>
      <div className="productDisplay">
        <div className="productPageTitle">
          <h1>All Products</h1>
        </div>
        <div className="allproductsContainer">
        {
            allProducts && allProducts.length !== 0 &&(
              <>
               {allProducts && allProducts.map((i, index) => <ProductCard data={i} key={index} />)}
              </>
            )
           }
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
