import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../../components/CheckoutSteps/CheckoutSteps";
import Header from "../../components/Header/Header";
import "./PaymentPage.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { beServer } from "../../server";
import { toast } from "react-toastify";

function PaymentPage() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [orderData, setOrderData] = useState([]);
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    const storedOrderData = JSON.parse(localStorage.getItem("latestOrder"));
    setOrderData(storedOrderData);
  }, []);

      const order = {
        cart: orderData?.cart,
        shippingAddress: orderData?.shippingAddress,
        user: user,
        totalPrice: orderData?.totalPrice,
      };


  async function confirmOrder(e) {
    e.preventDefault();
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };
  
      order.paymentInfo = {
        type: "Cash On Delivery",
      };
  
      try {
        const response = await axios.post(`${beServer}/order/create-order`, order, config);
        console.log('Order created:', response.data);
  
        toast.success("Order successful!");
        localStorage.setItem("cartItems", JSON.stringify([]));
        localStorage.setItem("latestOrder", JSON.stringify([]));
        navigate("/order-success");
        // window.location.reload();
      } catch (error) {
        console.error('Error creating order:', error.response.data.message);
        toast.error("Error creating order. Please try again.");
      }
  };

  const subTotalPrice = cart.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );
  const shipping = 5;
  const totalPrice = (subTotalPrice + shipping).toFixed(2);

  return (
    <div className="paymentPage">
      <div className="headerSection">
        <Header />
      </div>
      <div className="paymentSection">
        <div className="checkoutSteps">
          <CheckoutSteps active={2} />
        </div>
        <div className="paymentDetails">
          <div className="paymentMode">
            <h3>Payment Method</h3>
            <div className="paymentOption">
              <input
                type="radio"
                id="cod"
                name="paymentMethod"
                value="Cash on Delivery"
                checked={paymentMethod === "Cash on Delivery"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="cod">Cash on Delivery</label>
            </div>
            <div className="totalPrice">
              <h3>Total Price: ${totalPrice}</h3>
            </div>

            <div className="confirmOrderButton">
              <button onClick={confirmOrder}>Confirm Order</button>
            </div>
          </div>

          <div className="cartItemsContainer">
            <div className="cartItems">
              <h3>Items in Your Cart:</h3>
              {cart.map((item) => (
                <div key={item.id} className="cartItem">
                  <img src={item.images[0]} alt="" />
                  <p>{item.name}</p>
                  <p>Quantity: {item.qty}</p>
                  <p>Price: ${item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
