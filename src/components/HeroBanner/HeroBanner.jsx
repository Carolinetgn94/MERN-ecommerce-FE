import "./HeroBanner.css";
import { Link } from "react-router-dom";

function HeroBanner() {
  return (
    <div className="banner1">
      <Link to="/products">
        <img src="https://img.freepik.com/free-vector/hand-drawn-flea-market-shopping-sale-banner-template_23-2149585836.jpg?w=1060&t=st=1716819283~exp=1716819883~hmac=aeabd36804815bfffa810423251939df5841e9b117f27aa234ae7b1199029cc6"></img>
      </Link>
    </div>
  );
}

export default HeroBanner;
