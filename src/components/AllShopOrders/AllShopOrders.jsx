import { useEffect, useState } from "react";
import { beServer } from "../../server";
import "./AllShopOrders.css";
import axios from "axios";

function AllShopOrders() {
  const [orders, setOrders] = useState([]);
  const [totalOrders, setTotalOrders] = useState(0);

  useEffect(() => {
    fetchShopOrders();
  }, []);

  async function fetchShopOrders() {
    try {
      const response = await axios.get(`${beServer}/order/shop-orders`, {
        withCredentials: true,
      });
      if (response.data.success) {
        setOrders(response.data.orders);
        setTotalOrders(response.data.orders.length);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error fetching shop orders:", error);
    }
  }

  return (
    <div className="allShopOrdersContainer">
      <div className="orderSummary">
        <h2>Shop Orders ({totalOrders})</h2>
      </div>
      <div className="orderList">
        {orders.map((order) => (
          <div key={order._id} className="orderItem">
            <h3>Order ID: {order._id}</h3>
            <p>Total Price: ${order.totalPrice}</p>
            <div className="shippingAddress">
              <p><strong>Shipping Address:</strong></p>
              <div className="shippingAddressDetails">
              <p>{order.shippingAddress.address1}</p>
              <p>{order.shippingAddress.address2}</p>
              <p>{order.shippingAddress.city}</p>
              <p>{order.shippingAddress.postalCode}</p>
              <p>{order.shippingAddress.country}</p>
              </div>
            </div>
            <div className="productsList">
              {order.products.map((product) => (
                <div key={product._id} className="productItem">
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "100px", height: "auto" }}
                    className="productImage"
                  />
                  <p>
                    {product.name} - Quantity: {product.quantity}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllShopOrders;
