import { RxPerson } from "react-icons/rx";
import "./ProfileMenu.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { TbAddressBook } from "react-icons/tb";
import axios from "axios";
import { beServer } from "../../server";
import { toast } from "react-toastify";

function ProfileMenu({ setActive, active }) {
  const navigate = useNavigate();

  function logoutHandler() {
    axios.get(`${beServer}/user/logout`, {withCredentials: true}).then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/login");
    }).catch((error) => {
        console.log(error.response.data.message);
    })
  }

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
      <div className="changePasswordIcon" onClick={() => setActive(4)}>
        <TbAddressBook size={20} color={active === 4 ? "red" : ""} />
        <span>Change Password</span>
      </div>
      <div className="logoutIcon" onClick={() => setActive(3) || logoutHandler()}>
        <AiOutlineLogin size={20} color={active === 3 ? "red" : ""} />
        <span>Logout</span>
      </div>
    </div>
  );
}

export default ProfileMenu;
