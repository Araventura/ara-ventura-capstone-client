import React from "react";
import "./Header.scss";
import Logo from "../../assets/logo/DentaShift.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  // Determine the active route
  const route =
    location.pathname === "/"
      ? "home"
      : location.pathname.includes("offices")
      ? "offices"
      : location.pathname.includes("jobs")
      ? "jobs"
      : "";

  return (
    <div className="header">
      <div className="header__logo-wrapper">
        <img src={Logo} alt="DentaShift Logo" />
      </div>
      <div className="header__buttons">
        <Link
          to={"/"}
          className={`header__button-home ${
            route === "home" ? "active-button" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to={"/offices/4"}
          className={`header__button-office ${
            route === "offices" ? "active-button" : ""
          }`}
        >
          Dental Office
        </Link>
        <Link
          to={"/jobs"}
          className={`header__button-professional ${
            route === "jobs" ? "active-button" : ""
          }`}
        >
          Dental Professional
        </Link>
      </div>
    </div>
  );
}

export default Header;
