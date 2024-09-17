import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import FacebookIcon from "../../assets/icon/facebook-icon.svg";
import InstaIcon from "../../assets/icon/instagram-icon.svg";
import LinkedinIcon from "../../assets/icon/linkedin-icon.svg";

function Footer() {
  return (
    <div className="footer">
      <h4 className="footer__subtitle">Ara Ventura © DentaShift 2024</h4>
      <div className="fotter__icon-wrapper">
        <Link to="https://www.facebook.com/">
          <img
            className="footer__icon"
            src={FacebookIcon}
            alt="Facebook Icon"
          />
        </Link>
        <Link to="https://www.instagram.com/">
          <img className="footer__icon" src={InstaIcon} alt="Instagram Icon" />
        </Link>
        <Link to="https://www.linkedin.com/in/ara-ventura/">
          <img
            className="footer__icon"
            src={LinkedinIcon}
            alt="LinkedIn Icon"
          />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
