import { useEffect, useState } from "react";
import "./JobsList.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import GoogleMaps from "../../assets/images/google-maps.png";

function JobsList() {
  const [officesJobsList, setOfficesJobsList] = useState([]);
  const [officesList, setOfficesList] = useState([]);

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
    <div className="jobs">
      <div className="jobs__left">
        <ul className="jobs__list">
          <h2>Jobs near you</h2>
          {jobsWithOffices.map((job, i) => (
            <li key={job.id} className="jobs__list-item">
              <Link to={`/jobs/${job.id}`}>
                <div className="jobs__top-wrapper">
                  <div className="jobs__list-profile">
                    <div className="jobs__list-image">
                      <img
                        src={`../src/assets/images/doctor-${job.officeId}.jpg`}
                        alt="Photo of a dental office"
                      />
                    </div>
                    <div className="jobs__list-details">
                      <h4 className="doctor-name jobs__list-name">
                        {i + 1}. {job.officeDoctor}
                      </h4>
                      <h5 className="office-address jobs__list-location">
                        {job.officeAddress}
                      </h5>
                    </div>
                  </div>
                  <div className="jobs__list-rate">
                    <h4 className="job-rate">
                      ${job.payMin}-{job.payMax}
                    </h4>
                  </div>
                </div>
                <div className="jobs__bottom-wrapper">
                  <div className="jobs__details-left">
                    <p className="list-details jobs__details-rating">
                      {" "}
                      ⭐️ 5.0 Reviews
                    </p>
                    {/* <p className="list-details jobs__details-office">
                      Office: {job.officeName}
                    </p> */}
                    <p className="list-details jobs__details-job">
                      Looking for: <b>{job.jobTitle}</b>
                    </p>
                    <p className="list-details jobs__details-date">
                      Date: {dateFormat(job.dateStart, "mmm d")} -{" "}
                      {dateFormat(job.dateEnd, "mmm d")}
                    </p>
                    {/* <p className="list-details jobs__details-contact">
                      Contact: {job.officeContact} - {job.officeContactPosition}
                    </p> */}
                  </div>
                  <div className="jobs__details-right">
                    <img
                      src={`../src/assets/images/office-${job.officeId}.jpg`}
                      alt="Dental Office photo"
                    />
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
