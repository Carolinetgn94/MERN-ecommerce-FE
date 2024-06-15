import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ProductsPage.css";
import React, {useEffect} from 'react';
import { getAllProducts } from "../../redux/actions/product.action";


function ProductsPage() {
    const dispatch = useDispatch();
    const { allProducts } = useSelector((state) => state.products);

    useEffect(() => {
      dispatch(getAllProducts());
    }, [dispatch]);

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
