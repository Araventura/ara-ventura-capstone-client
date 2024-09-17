import React from "react";
import "./Header.scss";
import Logo from "../../assets/logo/DentaShift.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__logo-wrapper">
        <img src={Logo} alt="DentaShift Logo" />
      </div>
      <div className="header__buttons">
        <Link className="header__button-office">
          <button>Dental Office</button>
        </Link>
        <Link className="header__button-professional">
          <button>Dental Professional</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
