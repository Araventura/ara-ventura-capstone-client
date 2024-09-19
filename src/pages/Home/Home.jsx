import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import BookingImage from "../../assets/images/healthcare-services.webp";
import Hero from "../../components/Hero/Hero.jsx";
import FeaturesCards from "../../components/FeaturesCards/FeaturesCards.jsx";
import FeaturesOffices from "../../components/FeaturesOffices/FeaturesOffices.jsx";
import FeaturesProfessionals from "../../components/FeaturesProfessionals/FeaturesProfessionals.jsx";

function Home() {
  return (
    <div className="home">
      <Hero />
      <FeaturesOffices />
      <FeaturesProfessionals />
      <div className="features">
        <FeaturesCards />
      </div>
      {/* Call to action */}
      <div className="call-to-action">
        <img
          className="call-to-action__image"
          src={BookingImage}
          alt="Check Icon"
        />
        <h2 className="call-to-action__title">
          Get Started with DentaShift today!
        </h2>
        <Link to={"/"} className="hero__button call-to-action__button">
          <button>Sign up for free</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
