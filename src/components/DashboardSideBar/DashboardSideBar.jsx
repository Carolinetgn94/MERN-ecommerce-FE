import { Link } from "react-router-dom";
import "./DashboardSideBar.css";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";

function DashboardSideBar({active}) {
  return (
    <div className="dashboardContainer">
      <div className="allOrders">
        <Link to="/dashboard-orders">
          <FiShoppingBag
            size={30}
            color={`${active === 1 ? "crimson" : "#555"}`}
          />
          <h5>All Orders</h5>
        </Link>
      </div>
      <div className="allProducts">
        <Link to="/dashboard-products">
          <FiPackage size={30} color={`${active === 2 ? "crimson" : "#555"}`} />
          <h5>All Products</h5>
        </Link>
      </div>
      <div className="createProducts" >
        <Link to="/dashboard-create-product">
          <AiOutlineFolderAdd
            size={30}
            color={`${active === 3 ? "crimson" : "#555"}`}
          />
          <h5>Create Product</h5>
        </Link>
      </div>
      <div className="settings">
        <Link to="/settings">
        <CiSettings
            size={30}
            color={`${active === 4 ? "crimson" : "#555"}`}
          />
          <h5>Settings</h5>
        </Link>
      </div>
    </div>
  );
}

export default DashboardSideBar;
