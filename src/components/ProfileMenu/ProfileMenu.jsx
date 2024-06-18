import { RxPerson } from "react-icons/rx";
import "./ProfileMenu.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { TbAddressBook } from "react-icons/tb";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios";
import { beServer } from "../../server";
import { toast } from "react-toastify";
import { HiOutlineShoppingBag } from "react-icons/hi";

function ProfileMenu({ setActive, active }) {
  const navigate = useNavigate();

  async function logoutHandler() {
    try {
      const response = await axios.get(`${beServer}/user/logout`, {
        withCredentials: true, 
      });
      if (response.data.success) {
        toast.success(response.data.message);
        window.location.reload()
        navigate("/login", { replace: true });
      } else {
        toast.error("Logout failed");
      }
    } catch (error) {
      toast.error(error.response.data.message || "Logout failed");
    }
  }

  return (
    <div className="profileMenuContainer">
      <div className="profileIcon" onClick={() => setActive(1)}>
        <RxPerson size={20} color={active === 1 ? "red" : ""} />
        <span>Profile</span>
      </div>
      <div className="ordersIcon" onClick={() => setActive(5)}>
        <HiOutlineShoppingBag size={20} color={active === 5 ? "red" : ""} />
        <span>My Orders</span>
      </div>
      <div className="addressIcon" onClick={() => setActive(2)}>
        <TbAddressBook size={20} color={active === 2 ? "red" : ""} />
        <span>Address</span>
      </div>
      <div className="changePasswordIcon" onClick={() => setActive(4)}>
        <RiLockPasswordLine size={20} color={active === 4 ? "red" : ""} />
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
