import { useEffect, useState } from "react";
import { productData } from "../../seedData";
import ProductCard from "../ProductCard/ProductCard";
import "./ShopProfileData.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsShop } from "../../redux/actions/product.action";

function ShopProfileData({ isOwner }) {
  const [active, setActive] = useState(1);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    if (id) {
       dispatch((getAllProductsShop(id)))
    }
   
  }, [dispatch, id])

  return (
    <div className="ShopProfileContainer">
      <div className="shopProfileHeader">

          {/* <h2 className="shopProductsButton">My Shop Products</h2> */}
  
      
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
        {products && products.length > 0 && (
    products.map((product, index) => (
      <ProductCard data={product} key={index} isShop={true} />
    ))
  )}
      </div>
      
      
    </div>
  );
}

export default ShopProfileData;
