import React from "react";
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHeart,
  faCartShopping,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <>
        <link rel="stylesheet" href="../styles/navbar.css" />
        <div className="main1">
          <p>
            <b>FREE SHIPPING ON ALL ONLINE PAYMENTS.</b>
          </p>
        </div>
        <div className="main2">
          <div className="logo">
            <div id="puma-logo"><Link to="/">i</Link></div>
            <div id="menu">
              <p>New</p>
              <p>Women</p>
              <p>
                <Link to="/men">Men</Link>
              </p>
              <p>Kids</p>
              <p>Motorsport</p>
              <p>Collaborations</p>
              <p>Sports</p>
              <p>Outlet</p>
            </div>
          </div>
          <div className="last">
            <div id="search">
              <p id="search-icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
              </p>
              <p>
                <b>SEARCH </b>{" "}
              </p>
            </div>
            <div className="icons">
            <p id="search-icon-1">
                <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
              </p>
              <p>
                <FontAwesomeIcon icon={faHeart} />
              </p>
              <p>
                <FontAwesomeIcon icon={faCartShopping} />
              </p>
              <p id="user">
                <Link to="/register">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </p>
              <p id="search-icon-1"><FontAwesomeIcon icon={faBars} /> MENU</p>
              
            </div>
          </div>
        </div>

        <div className="main3">
          <p id="firstline">Extra 15% OFF*</p>
          <p id="secondline">
            *On Clothing above ₹1999 । * on footwear above ₹3999
          </p>
          <p id="thirdline">Auto-applied at Checkout । *Exclusions apply</p>
        </div>
      </>
    </div>
  );
};

export default Navbar;
