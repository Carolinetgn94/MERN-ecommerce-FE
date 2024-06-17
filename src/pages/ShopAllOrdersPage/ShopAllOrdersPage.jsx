import AllShopOrders from "../../components/AllShopOrders/AllShopOrders";
import DashboardHeader from "../../components/DashboadHeader/DashboardHeader";
import DashboardSideBar from "../../components/DashboardSideBar/DashboardSideBar";
import "./ShopAllOrdersPage.css";

function ShopAllOrdersPage() {
    return (
        <div className="shopAllProductsPage">
            <div className="shopHeaderSection">
                <DashboardHeader />
            </div>
            <div className="createProductSideBar">
                <DashboardSideBar active={1} />
            </div>
            <div className="allProductComponent">
                <AllShopOrders />
            </div>
        </div>
    )
}

export default ShopAllOrdersPage;