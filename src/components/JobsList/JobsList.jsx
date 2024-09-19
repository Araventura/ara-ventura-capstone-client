import { useEffect, useState } from "react";
import "./JobsList.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import GoogleMaps from "../../assets/images/google-maps.png";
import DoctorImage from "../../assets/images/doctor-1.jpg";
import OfficeImage from "../../assets/images/office-1.jpg";

function JobsList() {
  const [officesJobsList, setOfficesJobsList] = useState([]);
  const [officesList, setOfficesList] = useState([]);
  const params = useParams();

  useEffect(() => {
    const getOfficesJobsList = async () => {
      try {
        const response = await axios.get("http://localhost:8080/jobs");
        setOfficesJobsList(response.data);
      } catch (e) {
        console.log("Error getting offices jobs list:", e);
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

  return (
    <div className="jobs">
      <div className="jobs__left">
        <ul className="jobs__list">
          <h2>Jobs near you</h2>
          {officesJobsList.map((job) => (
            <li key={job.id} className="jobs__list-item">
              <Link to={`/jobs/${job.id}`}>
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
                    <h4 className="jobs__list-hourly">
                      ${job.payMin}-{job.payMax} hourly
                    </h4>
                  </div>
                </div>
                <div className="jobs__bottom-wrapper">
                  <div className="jobs__details-left">
                    <p className="jobs__details-rating"> ⭐️ 5.0 Reviews</p>
                    <p className="jobs__details-office">
                      Office: Dental Office
                    </p>
                    <p className="jobs__details-job">
                      Looking for: {job.jobTitle}
                    </p>
                    <p className="jobs__details-date">Date: July 22 - Sep 4</p>
                    <p className="jobs__details-contact">
                      Contact: Manager Name - Manager Positon
                    </p>
                  </div>
                  <div className="jobs__details-right">
                    <img src={OfficeImage} alt="Dental Office photo" />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="jobs__right">
        <img className="jobs__right-image" src={GoogleMaps} alt="Google Maps" />
      </div>
    </div>
  );
}

export default JobsList;
