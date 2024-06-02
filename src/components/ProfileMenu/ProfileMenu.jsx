import { RxPerson } from "react-icons/rx";
import "./ProfileMenu.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { TbAddressBook } from "react-icons/tb";

function ProfileMenu({ setActive, active }) {
  const navigate = useNavigate();

  return (
    <div className="profileMenuContainer">
      <div className="profileIcon" onClick={() => setActive(1)}>
        <RxPerson size={20} color={active === 1 ? "red" : ""} />
        <span>Profile</span>
      </div>
      <div className="addressIcon" onClick={() => setActive(2)}>
        <TbAddressBook size={20} color={active === 2 ? "red" : ""} />
        <span>Address</span>
      </div>
      <div className="logoutIcon" onClick={() => setActive(3)}>
        <AiOutlineLogin size={20} color={active === 3 ? "red" : ""} />
        <span>Logout</span>
      </div>
    </div>
  );
}

export default ProfileMenu;
