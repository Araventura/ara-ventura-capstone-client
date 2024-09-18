import React from "react";
import "./JobsList.scss";
import GoogleMaps from "../../assets/images/google-maps.png";
import DoctorImage from "../../assets/images/doctor-1.jpg";
import OfficeImage from "../../assets/images/office-1.jpg";

function JobsList() {
  return (
    <div className="jobs">
      <div className="jobs__left">
        <ul className="jobs__list">
          <h2>Jobs near you</h2>
          <li className="jobs__list-item">
            <div className="jobs__top-wrapper">
              <div className="jobs__list-profile">
                <div className="jobs__list-image">
                  <img src={DoctorImage} alt="Photo of a dental office" />
                </div>
                <div className="jobs__list-details">
                  <h4 className="jobs__list-name">Oficces Name</h4>
                  <h5 className="jobs__list-location">Location</h5>
                </div>
              </div>
              <div className="jobs__list-rate">
                <h4 className="jobs__list-hourly">$30-38 hourly</h4>
              </div>
            </div>
            <div className="jobs__bottom-wrapper">
              <div className="jobs__details-left">
                <p className="jobs__details-rating"> ⭐️ 5.0 Reviews</p>
                <p className="jobs__details-office">Office: Dental Office</p>
                <p className="jobs__details-job">Looking for: Dental Job</p>
                <p className="jobs__details-date">Date: July 22 - Sep 4</p>
                <p className="jobs__details-contact">
                  Contact: Manager Name - Manager Positon
                </p>
              </div>
              <div className="jobs__details-right">
                <img src={OfficeImage} alt="Dental Office photo" />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="jobs__right">
        <img className="jobs__right-image" src={GoogleMaps} alt="Google Maps" />
      </div>
    </div>
  );
}

export default JobsList;
