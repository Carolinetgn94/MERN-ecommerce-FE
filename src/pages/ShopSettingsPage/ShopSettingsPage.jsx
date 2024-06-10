import Header from "../../components/Header/Header";
import ShopSettings from "../../components/ShopSettings/ShopSettings";
import "./ShopSettingsPage.css";

function ShopSettingsPage() {
    return(
        <div>
           <div className="headerSection">
                <Header />
            </div>
            <div className="shopSettingsSection">
                <ShopSettings />
            </div>
          
        </div>
    )
}

export default ShopSettingsPage;