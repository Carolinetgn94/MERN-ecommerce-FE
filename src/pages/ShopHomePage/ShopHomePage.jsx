import ShopInfo from "../../components/ShopInfo/ShopInfo";
import ShopProfileData from "../../components/ShopProfileData/ShopProfileData";
import "./ShopHomePage.css";

function ShopHomePage() {
    return(
        <div className="ShopHomePage">
            <div className="shopInfoSection">
                <ShopInfo isOwner={true}/>
            </div>
            <div className="shopProfileSection">
                <ShopProfileData isOwner={true}/>
            </div>
        </div>
    )
}

export default ShopHomePage;