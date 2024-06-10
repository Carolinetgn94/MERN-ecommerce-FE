import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import("./DashboardHeader.css");

function DashboardHeader() {
  const { seller } = useSelector((state) => state.seller);

  return (
    <div className="dashboardHeader">
       
       <div className="homepageLogo">
        <Link to="/">
          <h3>image logo</h3>
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
        <div className="dashboardProducts">
          <Link to="/dashboard-products">
            <FiShoppingBag size={30} />
          </Link>
        </div>
        <div className="dashboardProfile">
          <Link to={`/shop/${seller._id}`}>
            <CgProfile size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
