import "./CheckoutSteps.css";
import React from 'react';


const CheckoutSteps = ({ active }) => {
  return (
    <div className='checkout-steps-container'>
      <div className='checkout-steps-wrapper'>
        <div className='checkout-step'>
          <div className='checkout-step-button'>
            <span className='checkout-step-text'>1.Shipping</span>
          </div>
          <div className={`checkout-step-line ${active > 1 ? 'active' : 'inactive'}`} />
        </div>

        <div className='checkout-step'>
          <div className={`checkout-step-button ${active > 1 ? '' : 'inactive-background'}`}>
            <span className={`checkout-step-text ${active > 1 ? '' : 'inactive-text'}`}>
              2.Payment
            </span>
          </div>
        </div>

        <div className='checkout-step'>
          <div className={`checkout-step-line ${active > 3 ? 'active' : 'inactive'}`} />
          <div className={`checkout-step-button ${active > 2 ? '' : 'inactive-background'}`}>
            <span className={`checkout-step-text ${active > 2 ? '' : 'inactive-text'}`}>
              3.Success
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSteps;
