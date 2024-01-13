import React from "react";
import logo from "../assets/brand_logo.png";
import { BrowserRouter, Link } from "react-router-dom";
import "./styling/Navbar.css";
function Navbar() {
  return (
    <>
      <div className="navbar__">
        {/* left part */}
        <div className="navbar__left">
          <img src={logo} alt="logo_img" />
        </div>
        {/* middle part */}
        <div className="navbar__middle">
          <BrowserRouter>
            <ul className="navbar__links">
              <li className="navbar__routes">
                <Link to="/">MENU</Link>
              </li>
              <li className="navbar__routes">
                <Link to="/">LOCATION</Link>
              </li>
              <li className="navbar__routes">
                <Link to="/about">ABOUT</Link>
              </li>
              <li className="navbar__routes">
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </BrowserRouter>
        </div>
        {/* right part */}
        <div className="navbar__right">
          <button className="btn">Login</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
