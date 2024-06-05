import CreateProduct from "../CreateProduct/CreateProduct";
import DashboardHeader from "../DashboadHeader/DashboardHeader";
import DashboardSideBar from "../DashboardSideBar/DashboardSideBar";
import "./ShopCreateProduct.css";

function ShopCreateProduct() {
    return(
        <div className="shopCreateProduct">
            <div className="shopHeaderSection">
                <DashboardHeader />
            </div>
            <div className="createProductSideBar">
                <DashboardSideBar active={3} />
            </div>
            <div className="createProductComponent">
                <CreateProduct />
            </div>
        </div>
    )
}

export default ShopCreateProduct;