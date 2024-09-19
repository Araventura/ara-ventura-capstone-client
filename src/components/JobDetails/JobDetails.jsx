import { useEffect, useState } from "react";
import "./JobDetails.scss";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import GoogleMaps from "../../assets/images/google-maps.png";

function JobDetails() {
  const params = useParams();
  const [officesJobsList, setOfficesJobsList] = useState([]);
  const [officesList, setOfficesList] = useState({});

  useEffect(() => {
    const getOfficesJobsList = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/jobs/${params}`
        );
        setOfficesJobsList(response.data);
      } catch (e) {
        console.log("Error getting jobs details:", e);
      }
    };

    getOfficesJobsList();
  }, []);

  useEffect(() => {
    const getOfficesList = async () => {
      try {
        const response = await axios.get("http://localhost:8080/offices");
        setOfficesList(response.data);
      } catch (e) {
        console.log("Error getting offices list:", e);
      }
    };

    getOfficesList();
  }, []);

  const jobsWithOffices = officesJobsList.map((job) => {
    const office = officesList.find((office) => office.id === job.officeId);
    return {
      ...job,
      officeName: office?.name || "Office not found",
      officeAddress: office?.address || "N/A",
      officeDoctor: office?.practicingDoctor || "N/A",
      officeContact: office?.contactName || "N/A",
      officeContactPosition: office?.contactPosition || "N/A",
      officePhone: office?.phone || "N/A",
    };
  });

  return (
    <div className="details">
      <div className="details__left">
        <Link to="/jobs" className="details__link">
          <button className="details__button-back">Back</button>
        </Link>
        <div className="details__left-wrapper">
          <div className="details__left-img">
            <img src="../src/assets/images/doctor-1.jpg" alt="Doctors photo" />
          </div>
          <div className="details__doctor">
            <h4 className="details__doctor-name">name of doctor</h4>
            <h5 className="details__doctor-address">address</h5>
          </div>
        </div>
        <div className="details__info">
          <p className="details__info-reviews">Reviews</p>
          <p className="details__info-office">office:</p>
          <p className="details__info-job">looking for</p>
          <p className="details__info-details">Job details</p>
          <p className="details__info-date">date</p>
          <p className="details__info-contact">contact - contact position</p>
        </div>
        <Link className="details__link-email" mailto="officeemail@test.com">
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
