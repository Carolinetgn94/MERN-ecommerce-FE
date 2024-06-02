import { useState } from "react";
import Header from "../../components/Header/Header";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import "./ProfilePage.css";

function ProfilePage() {
    const [active, setActive] = useState(1);

    return(
        <div className="profilePage">
            <div className="headerSection">
                <Header />
            </div>
            <div className="profileSection">
                <div className="profileContent">
                     <div className="profileMenu">
                    <ProfileMenu active={active} setActive={setActive}/>
                </div>
                <div className="profileInfo">
                    <ProfileInfo active={active}/>
                </div>
                </div>
               
            </div>
        </div>
    )
}

export default ProfilePage;