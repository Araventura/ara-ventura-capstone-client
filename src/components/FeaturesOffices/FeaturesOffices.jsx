import React from "react";
import { Link } from "react-router-dom";
import "./FeaturesOffices.scss";
import CalendarImage from "../../assets/images/organized-calendars.svg";

function FeaturesOffices() {
  return (
    <div className="features">
      <div className="features__left">
        <img
          className="features__img"
          src={CalendarImage}
          alt="Two animated people chatting"
        />
      </div>
      <div className="features__right">
        <h2 className="features__title">Easily Publish Job Offers</h2>
        <h4 className="features__subtitle">
          Know who's available to work by publishing a shift opening
        </h4>
        <ul className="features__list">
          <li className="features__item">
            ✨ Instantly broadcast shifts to potential staff
          </li>
          <li className="features__item">
            ✨ Quickly gather interested candidates
          </li>
          <li className="features__item">
            ✨ Organize applicants as they apply to shifts
          </li>
        </ul>
        <Link to={"/"} className="hero__button">
          <button>Sing up for free</button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturesOffices;
