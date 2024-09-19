import React from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";
import HeroImage from "../../assets/images/workstaff-home-hero.jpg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__left">
        <h2 className="hero__title">
          Find the nearest dental professionals available for your office needs
        </h2>
        <h4 className="hero__subtitle">
          DentaShift offers a stress free booking at lightning speed, saving
          hours in planning, scheduling, prioritizing communication between
          clinics and dental professionals.
        </h4>
        <Link to={"/"} className="hero__button">
          <button>Sign up for free</button>
        </Link>
      </div>
      <div className="hero__right">
        <img
          className="hero__right-img"
          src={HeroImage}
          alt="DentaShift hero image"
        />
      </div>
    </div>
  );
}

export default Hero;
