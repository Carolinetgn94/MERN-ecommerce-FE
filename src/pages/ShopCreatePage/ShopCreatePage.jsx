import { useNavigate } from "react-router-dom";
import ShopCreate from "../../components/ShopCreate/ShopCreate";
import "./ShopCreatePage.css";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function ShopCreatePage() {
  const navigate = useNavigate();
    const { isSeller, seller } = useSelector((state) => state.seller);

    useEffect(() => {
        if (isSeller === true) {
            navigate(`/shop/${seller._id}`)
        }
    }, [])

  return (
    <div className="shopCreatePage">
      <ShopCreate />
    </div>
  );
}

export default ShopCreatePage;
