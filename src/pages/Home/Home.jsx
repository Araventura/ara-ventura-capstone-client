import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import HeroImage from "../../assets/images/workstaff-home-hero.jpg";
import CalendarImage from "../../assets/images/organized-calendars.svg";
import SchedulingImage from "../../assets/images/scheduling-1.webp";

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
      {/* App features for offices */}
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

      {/* App Features for Dental Professionals */}
      <div className="features">
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
          <Link to={"/"} className="hero__button">
            <button>Sing up for free</button>
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
    </div>
  );
}

export default Home;
