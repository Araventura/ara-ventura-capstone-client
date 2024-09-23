import React from "react";
import { Link } from "react-router-dom";
import "./FeaturesProfessionals.scss";
import SchedulingImage from "../../assets/images/scheduling-1.webp";

function FeaturesProfessionals() {
  return (
    <div className="features">
      {/* App Features for Dental Professionals */}
      <div className="features-professionals__left">
        <h2 className="features__title">
          Get in touch with potential employers
        </h2>
        <h4 className="features__subtitle">
          Spend more time on quality care and less time on going through job
          postings
        </h4>
        <ul className="features__list">
          <li className="features__item">⚡️ 1-to-1 messaging</li>
          <li className="features__item">
            ⚡️ Easy access to schedules and shift offers
          </li>
          <li className="features__item">
            ⚡️ Update availabilities and confirm shifts on the go
          </li>
          <li className="features__item">
            ⚡️ Get reminders of your upcoming shifts
          </li>
        </ul>
        <Link
          onClick={(e) =>
            alert(
              "This feature will be coming soon! We appreciate your patience."
            )
          }
          to={"/"}
          className="hero__button"
        >
          <button>Sign up for free</button>
        </Link>
      </div>
      <div className="features-professionals__right">
        <img
          className="features__img"
          src={SchedulingImage}
          alt="Animated adult with a schedule"
        />
      </div>
    </div>
  );
}

export default FeaturesProfessionals;
