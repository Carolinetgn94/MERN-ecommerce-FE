import { useNavigate } from "react-router-dom";
import ShopLogin from "../../components/ShopLogin/ShopLogin";
import "./ShopLoginPage.css"
import { useSelector } from "react-redux";
import React, { useEffect } from "react";

function ShopLoginPage() {
    const navigate = useNavigate();
    const { isSeller, isLoading } = useSelector((state) => state.seller);

    useEffect(() => {
        if (isSeller === true) {
            navigate(`/dashboard`)
        }
    }, [isLoading, isSeller])

    return(
        <div>
            <ShopLogin />
        </div>
    )
}

export default ShopLoginPage;