import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../../components/CheckoutSteps/CheckoutSteps";
import Header from "../../components/Header/Header";
import "./PaymentPage.css";
import { useSelector } from "react-redux";

function PaymentPage() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const { cart } = useSelector((state) => state.cart);

  const confirmOrder = () => {
    // Logic to save order details and navigate to the success page
    navigate("/order-success");
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
