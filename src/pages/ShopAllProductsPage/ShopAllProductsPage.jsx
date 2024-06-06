import AllProducts from "../../components/AllProducts/AllProducts";
import DashboardHeader from "../../components/DashboadHeader/DashboardHeader";
import DashboardSideBar from "../../components/DashboardSideBar/DashboardSideBar";
import "./ShopAllProductsPage.css";

function ShopAllProductsPage() {
    return (
        <div className="shopAllProductsPage">
            <div className="shopHeaderSection">
                <DashboardHeader />
            </div>
            <div className="createProductSideBar">
                <DashboardSideBar active={2} />
            </div>
            <div className="allProductComponent">
                <AllProducts />
            </div>
        </div>
    )
}

export default ShopAllProductsPage;