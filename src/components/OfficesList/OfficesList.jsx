import React from "react";
import "./OfficesList.scss";
import { Link } from "react-router-dom";

function OfficesList() {
  return (
    <div className="office">
      <div className="office__details">
        <Link className="office__link">
          <button className="office__buton">Back</button>
        </Link>
        <h2 className="office__title">Welcome back name of manager!</h2>
        <div className="office__buttons">
          <Link className="office__link">
            <button className="office__buton">Post a job</button>
          </Link>
          <Link className="office__link">
            <button className="office__buton">
              Browse dental professionals
            </button>
          </Link>
        </div>
      </div>
      <div className="office__jobs">
        <h4 className="office__jobs-title">Active job listings</h4>
        <ul className="office__jobs-list">
          <Link className="office__jobs-link">
            <li className="office__jobs-item">
              <div className="office__jobs-top">
                <div className="office__top-left">
                  <img
                    className="office__top-img"
                    src=""
                    alt="doctor's image"
                  />
                  <div className="office__top-details">
                    <h4 className="office__top-name">dr dame</h4>
                    <h5 className="office__top-address">address</h5>
                  </div>
                </div>
                <div className="office__top-right">
                  <img src="" alt="Delete Icon" />
                  <h4>$30-38 hourly</h4>
                </div>
              </div>
              <div className="office__jobs-bottom">
                <div className="office__bottom-left">
                  <p className="office__bottom-details">⭐️ 5.0 Reviews</p>
                  <p className="office__bottom-details">Office: Office name</p>
                  <p className="office__bottom-details">Available shift</p>
                  <p className="office__bottom-details">Job details</p>
                  <p className="office__bottom-details">Date: </p>
                  <p className="office__bottom-details">
                    Contact: Name of contact - contact position
                  </p>
                </div>
                <div className="office__bottom-right">
                  <img src="" alt="Image of dental office" />
                </div>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default OfficesList;
