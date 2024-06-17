import { useEffect, useState } from "react";
import DashboardHeader from "../../components/DashboadHeader/DashboardHeader";
import DashboardSideBar from "../../components/DashboardSideBar/DashboardSideBar";
import "./ShopDashboardPage.css";
import axios from "axios";
import { beServer } from "../../server";

function ShopDashboardPage() {
  return (
    <div className="ShopDashboardPage">
      <div className="headerSection">
        <DashboardHeader />
      </div>
      <div className="sideBar">
        <DashboardSideBar />
      </div>
      <div className="contentSection">
        <div className="summarySection">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

function OrderSummary() {
    const [totalOrders, setTotalOrders] = useState(0);
  
    useEffect(() => {
      fetchOrderSummary();
    }, []);
  
    async function fetchOrderSummary() {
      try {
        const response = await axios.get(`${beServer}/order/shop-orders`, {
          withCredentials: true,
        });
        if (response.data.success) {
          setTotalOrders(response.data.orders.length);
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching order summary:", error);
      }
    }
  
    return (
      <div className="summaryBox">
        <h3>Orders</h3>
        <p>Total Orders: {totalOrders}</p>
      </div>
    );
  }
  

export default ShopDashboardPage;
