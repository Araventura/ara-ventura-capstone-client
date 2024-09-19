import { useEffect, useState } from "react";
import "./JobDetails.scss";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import dateFormat from "dateformat";
import GoogleMaps from "../../assets/images/google-maps.png";

function JobDetails() {
  const params = useParams();
  const [jobDetails, setJobDetails] = useState([]);
  const [officeDetails, setOfficeDetails] = useState({});

  useEffect(() => {
    const getOfficesJobsList = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/jobs/${params.id}`
        );
        setJobDetails(response.data);
      } catch (e) {
        console.log("Error getting jobs details:", e);
      }
    };
    getOfficesJobsList();
  }, []);

  useEffect(() => {
    const getOfficesList = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/offices/${jobDetails.officeId}`
        );
        setOfficeDetails(response.data);
      } catch (e) {
        console.log("Error getting offices list:", e);
      }
    };

    if (jobDetails.officeId != undefined) {
      getOfficesList();
    }
  }, [jobDetails]);

  return (
    <div className="details">
      <div className="details__left">
        <Link to="/jobs" className="details__link">
          <button className="details__button-back">Back</button>
        </Link>
        <div className="details__left-wrapper">
          <div className="details__left-img">
            <img
              src={`../src/assets/images/doctor-${jobDetails.officeId}.jpg`}
              alt="Doctors photo"
            />
          </div>
          <div className="details__doctor">
            <h4 className="details__doctor-name">
              {officeDetails.practicingDoctor}
            </h4>
            <h5 className="details__doctor-address">{officeDetails.address}</h5>
            <h5 className="details__doctor-rate">
              ${jobDetails.payMin}-{jobDetails.payMax} hourly
            </h5>
          </div>
        </div>
        <div className="details__info">
          <p className="details__info-reviews">⭐️ 5.0 Reviews</p>
          <p className="details__info-office">
            Name of Office: <b>{officeDetails.name}</b>
          </p>
          <p className="details__info-job">
            Available Shift: <b>{jobDetails.jobTitle}</b>
          </p>
          <p className="details__info-details">
            Description: {jobDetails.description}
          </p>
          <p className="details__info-date">
            {" "}
            Date: {dateFormat(jobDetails.dateStart, "mmm d")} -
            {dateFormat(jobDetails.dateEnd, "mmm d")}
          </p>
          <p className="details__info-contact">
            Contact: {officeDetails.contactName} -{" "}
            {officeDetails.contactPosition}
          </p>
        </div>
        <Link
          className="details__link-email"
          onClick={() => {
            window.location = `mailto:${officeDetails.email}`;
          }}
        >
          <button className="details__button-email">Get in touch</button>
        </Link>
      </div>
      <div className="details__right">
        <img
          className="details__right-image"
          src={GoogleMaps}
          alt="Google Map"
        />
      </div>
    </div>
  );
}

export default JobDetails;
