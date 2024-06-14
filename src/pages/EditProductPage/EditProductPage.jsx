import DashboardHeader from "../../components/DashboadHeader/DashboardHeader";
import DashboardSideBar from "../../components/DashboardSideBar/DashboardSideBar";
import EditProduct from "../../components/EditProduct/EditProduct";
import "./EditProductPage.css";

function EditProductPage() {
  return (
    <div className="editProductPage">
      <div className="shopHeaderSection">
        <DashboardHeader />
      </div>
      <div className="createProductSideBar">
        <DashboardSideBar />
      </div>
      <div className="editProductSection">
        <EditProduct />
      </div>
    </div>
  );
}

export default EditProductPage;
