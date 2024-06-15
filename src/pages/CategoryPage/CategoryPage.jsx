import Header from "../../components/Header/Header";
import "./CategoryPage.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllProductsByCategory } from "../../redux/actions/product.action";
import ProductCard from "../../components/ProductCard/ProductCard";

function CategoryPage() {
  const dispatch = useDispatch();
  const { category } = useParams();
  const { allProducts } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProductsByCategory(category));
  }, [category, dispatch]);

  return (
    <div className="categoryPage">
      <div className="categoryHeader">
        <Header />
        <h2>{category} Products</h2>
        </div>
      <div className="categoryProducts">
      {allProducts && allProducts.length > 0 ? (
          allProducts.map((product) => (
            <ProductCard key={product._id} data={product} />
          ))
        ) : (
          <p>There are no products in this category!</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;