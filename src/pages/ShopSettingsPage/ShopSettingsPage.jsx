import DashboardHeader from "../../components/DashboadHeader/DashboardHeader";
import DashboardSideBar from "../../components/DashboardSideBar/DashboardSideBar";
import ShopSettings from "../../components/ShopSettings/ShopSettings";
import "./ShopSettingsPage.css";

function ShopSettingsPage() {
    return(
        <div>
           <div className="headerSection">
                <DashboardHeader />
            </div>
            <div className="sideBar">
                <DashboardSideBar active={4}/>
            </div>
            <div className="shopSettingsSection">
                <ShopSettings />
            </div>
          
        </div>
    )
}

export default ShopSettingsPage;