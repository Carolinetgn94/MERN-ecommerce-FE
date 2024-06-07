import "./ProductDetailsPage.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productData } from "../../seedData";
import Header from "../../components/Header/Header";
import MainProductDetails from "../../components/MainProductDetails/MainProductDetails";
import { useSelector } from "react-redux";


function ProductDetailsPage() {
    const { allProducts } = useSelector((state) => state.products);
    const {name} = useParams();
    const [data, setData] = useState(null);

    
    useEffect(() => {
        console.log('useParams name:', name);
        const data = allProducts.find((i) => i.name === name);
        setData(data);
        console.log(data);
    }, [name]);



    return (
        <div className="productDetailsPage">
            <div className="headerSection">
                <Header />
            </div>
            <div className="mainProductDetails">
                 {data ? <MainProductDetails data={data} /> : <p>Loading...</p>}
            </div>

        </div>
    )
}

export default ProductDetailsPage;