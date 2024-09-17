import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import HeroImage from "../../assets/images/workstaff-home-hero.jpg";
import CalendarImage from "../../assets/images/organized-calendars.svg";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero__left">
          <h2 className="hero__title">
            Find the nearest dental professionals available for your office
            needs
          </h2>
          <h4 className="hero__subtitle">
            DentaShift offers a stress free booking at lightning speed, saving
            hours in planning, scheduling, prioritizing communication between
            clinics and dental professionals.
          </h4>
          <Link to={"/"} className="hero__button">
            <button>Sing up for free</button>
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
      <div className="features">
        <div className="features__left">
          <img
            className="features__left-img"
            src={CalendarImage}
            alt="Two animated people chatting"
          />
        </div>
        <div className="features__right">
          <h2 className="features__right-title">Easily Publish Job Offers</h2>
          <h4 className="features__right-subtitle">
            Know who's available to work by publishing a shift opening
          </h4>
          <ul className="features__right-list">
            <li className="features__right-item">
              ✨ Instantly broadcast shifts to potential staff
            </li>
            <li className="features__right-item">
              ✨ Quickly gather interested candidates
            </li>
            <li className="features__right-item">
              ✨ Organize applicants as they apply to shifts
            </li>
          </ul>
          <Link to={"/"} className="hero__button">
            <button>Sing up for free</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
