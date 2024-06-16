import React from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps';
import Header from '../../components/Header/Header';
import './OrderSuccessPage.css';

function OrderSuccessPage() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="orderSuccessPage">
      <div className="headerSection">
        <Header />
      </div>
      <div className="successSection">
        <div className="checkoutSteps">
          <CheckoutSteps active={3} />
        </div>
        <div className="successDetails">
          <h2>Your order has been placed successfully!</h2>
          <button onClick={goToHome}>Go to Home</button>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccessPage;
