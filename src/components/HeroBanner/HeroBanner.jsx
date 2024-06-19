import "./HeroBanner.css";
import { Link } from "react-router-dom";
import banner1 from "../../assets/Banner1.png";

function HeroBanner() {
  return (
    <div className="banner1">
      <Link to="/create-shop">
        <img src={banner1}></img>
      </Link>
    </div>
  );
}

export default HeroBanner;
