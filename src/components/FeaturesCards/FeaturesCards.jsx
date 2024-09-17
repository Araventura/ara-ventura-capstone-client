import React from "react";
import "./FeaturesCards.scss";
import FeaturesImage from "../../assets/images/Payroll-1.png";
import TrackingImage from "../../assets/images/time-tracking.webp";
import DoctorsImage from "../../assets/images/healthcare-scheduling.svg";

function FeaturesCards() {
  return (
    <ul className="cards">
      <li className="card__item">
        <img
          className="card__item-img"
          src={TrackingImage}
          alt="Animated human looking at a phone"
        />
        <div className="card__item-wrapper">
          <h2 className="card__item-title">On-Demand Shifts</h2>
          <p className="card__item-subtitle">
            Single tool for planning and get notified when there's an approval
          </p>
        </div>
      </li>
      <li className="card__item">
        <img
          className="card__item-img"
          src={DoctorsImage}
          alt="Two animated doctors planning a schedule"
        />
        <div className="card__item-wrapper">
          <h2 className="card__item-title">Booking Shifts but Smoother</h2>
          <p className="card__item-subtitle">
            Multiple confirmation options, select shifts depending on your needs
          </p>
        </div>
      </li>
      <li className="card__item">
        <img
          className="card__item-img"
          src={FeaturesImage}
          alt="Animated app features"
        />
        <div className="card__item-wrapper">
          <h2 className="card__item-title">Scheduling and communication</h2>
          <p className="card__item-subtitle">
            Efficiently plan and manage your schedule
          </p>
        </div>
      </li>
    </ul>
  );
}

export default FeaturesCards;
