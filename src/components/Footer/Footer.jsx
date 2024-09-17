import React from "react";
import "./Footer.scss";
import FacebookIcon from "../../assets/icon/facebook-icon.svg";
import InstaIcon from "../../assets/icon/instagram-icon.svg";
import LinkedinIcon from "../../assets/icon/linkedin-icon.svg";

function Footer() {
  return (
    <div className="footer">
      <h4 className="footer__subtitle">Ara Ventura © DentaShift 2024</h4>
      <div className="fotter__icon-wrapper">
        <img className="footer__icon" src={FacebookIcon} alt="" />
        <img className="footer__icon" src={InstaIcon} alt="" />
        <img className="footer__icon" src={LinkedinIcon} alt="" />
      </div>
    </div>
  );
}

export default Footer;
