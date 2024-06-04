import DashboardHeader from "../../components/DashboadHeader/DashboardHeader";
import DashboardSideBar from "../../components/DashboardSideBar/DashboardSideBar";
import "./ShopDashboardPage.css";

function ShopDashboardPage() {
    return (
        <div className="ShopDashboardPage">
            <div className="headerSection">
               <DashboardHeader />  
            </div>
            <div className="sideBar">
                <DashboardSideBar />
            </div>
           
        </div>
    )
}

export default ShopDashboardPage;