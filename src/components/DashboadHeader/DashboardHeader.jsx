import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import "./DashboardHeader.css";
import logo from "../../assets/Shopalooza-logo.png";


function DashboardHeader() {
  const { seller } = useSelector((state) => state.seller);

  return (
    <div className="dashboardHeader">
       
       <div className="dashboardLogo">
       <Link to="/">
          <img src={logo} alt="Shopalooza Logo" className="logo-image" />
          </Link>
      </div>
      <div className="dashboardLogo">
        <Link to="/dashboard">
          <h2>Dashboard</h2>
        </Link>
      </div>
      <div className="dashboardNav">
        {/* <div className="dashboardOrders">
          <Link to="/dashboard-orders">
            <FiPackage size={30} />
          </Link>
        </div> */}
        <div className="dashboardNavItem">
          <Link to="/dashboard-products">
            <FiShoppingBag className="icon" size={30} />
          </Link>
        </div> 
        <div className="dashboardNavItem">
          <h4>Hello, {seller.name}!</h4>
        </div>
        <div className="dashboardNavItem">
          <Link to={`/shop/${seller._id}`}>
          {seller?.avatar? (
              <img
                src={seller.avatar}
                alt={seller.name}
                className="dashboardAvatarIcon"
              />
            ) : (
              <CgProfile className="icon" size={30} />
            )}
          </Link>
        </div>
       
      </div>
    </div>
  );
}

export default DashboardHeader;
