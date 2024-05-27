import "./Header.css";
import { Link } from "react-router-dom";
import React, {useState} from "react";
import NavBar from "../NavBar/NavBar";

function Header() {
  const [searchInput, setSearchInput] = useState("");

  function handleSearchChange(e) {
    const input = e.target.value;
    setSearchInput(input);
  }

  return (
    <div className="header">
        <div className="header-row">
      <div className="header-logo">
        <Link to="/">
          <h3>image logo</h3>
        </Link>
      </div>
      <div className="searchbox">
        <input
          type="text"
          placeholder="Search Product..."
          value={searchInput}
          onChange={handleSearchChange}
          className="searchinput"
        ></input>
      </div>
      {/*  will try continue search function when have data */}

      <div className="seller">
        <Link to="/seller" className="seller-link">
            <h3>Become a Seller</h3>
        </Link>
      </div>
      </div>
      <div className="navbar">
        <NavBar />

      </div>

    </div>
  );
}

export default Header;
