import "./Header.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";

function Header() {
  const { allProducts } = useSelector((state) => state.products);
  const { isSeller } = useSelector((state) => state.seller);
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  function handleSearchChange(e) {
    const input = e.target.value;
    setSearchInput(input);
    if (input.length === 0) {
      setSearchData(null);
    } else {
      const filteredProducts =
        allProducts &&
        allProducts.filter((product) =>
          product.name.toLowerCase().includes(input.toLowerCase())
        );
      setSearchData(filteredProducts);
    }
  }

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

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
          <AiOutlineSearch size={30} />

          {searchData && searchData.length !== 0 ? (
            <div className="searchResult">
              {searchData &&
                searchData.map((i, index) => {
                  return (
                    <Link to={`/product/${i.name}`}>
                      <div className="searchedItem">
                        <img src={``} alt="" />
                        <h1>{truncateText(i.name, 35)}</h1>
                      </div>
                    </Link>
                  );
                })}
            </div>
          ) : null}
        </div>

        <div className="seller">
          <Link to={`${isSeller ? "/dashboard" : "/create-shop"}`}>
            <h3>{isSeller ? "Go Dashboard" : "Become Seller"}</h3>
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
