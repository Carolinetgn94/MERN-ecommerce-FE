import CheckoutDetails from "../../components/CheckoutDetails/CheckoutDetails";
import CheckoutSteps from "../../components/CheckoutSteps/CheckoutSteps";
import Header from "../../components/Header/Header";
import "./CheckoutPage.css";

function CheckoutPage() {
  return (
    <div className="checkoutPage">
      <div className="headerSection">
        <Header />
      </div>
      <div className="checkoutSection">
        <div className="checkoutSteps">
          <CheckoutSteps active={1} />
        </div>
        <div className="checkoutDetails">
          <CheckoutDetails />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
