import React, { useState, useEffect } from "react";
import "./OfficesList.scss";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import dateFormat from "dateformat";
import EditIcon from "../../assets/icon/edit.png";
import DeleteIcon from "../../assets/icon/delete.png";

function OfficesList() {
  const params = useParams();

  const [officeJobsList, setOfficeJobsList] = useState([]);
  const [office, setOffice] = useState([]);

  useEffect(() => {
    const getOfficesJobsList = async () => {
      try {
        const response = await axios.get("http://localhost:8080/jobs");
        const officeJobs = response.data.filter(
          (job) => job.officeId == params.id
        );
        setOfficeJobsList(officeJobs);
      } catch (e) {
        console.log("Error getting offices jobs list:", e);
      }
    };
    getOfficesJobsList();
  }, []);

  useEffect(() => {
    const getOffice = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/offices/${params.id}`
        );
        setOffice(response.data);
      } catch (e) {
        console.log("Error getting offices list:", e);
      }
    };

    getOffice();
  }, []);

  const handleDeleteJob = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/jobs/${id}`);
      const nextJobList = officeJobsList.filter((job) => job.id != id);
      setOfficeJobsList(nextJobList);
    } catch (e) {
      console.log(`Error deleting job:`, id);
    }
  };

  return (
    <div className="office">
      <div className="office__details">
        <h2 className="office__title">Welcome back {office.contactName}!</h2>
        <div className="office__buttons">
          <Link to={`/offices/${params.id}/post`} className="office__link">
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
        <h4 className="office__jobs-title">Active job listings:</h4>
        <ul className="office__jobs-list">
          {officeJobsList.map((job) => (
            <div key={job.id} className="office__jobs-link">
              <li className="office__jobs-item">
                <div className="office__jobs-top">
                  <div className="office__top-left">
                    <img
                      className="office__top-img"
                      src={`../src/assets/images/doctor-${office.id}.jpg`}
                      alt="doctor's image"
                    />
                    <div className="office__top-details">
                      <h4 className="doctor-name">
                        {job.id}. {office.practicingDoctor}
                      </h4>
                      <h4 className="office-address">{office.address}</h4>
                    </div>
                  </div>
                  <div className="office__top-right">
                    <div className="office__icon-wrapper">
                      <img
                        className="office__icon"
                        src={EditIcon}
                        alt="Edit Icon"
                      />
                      <img
                        onClick={() => handleDeleteJob(job.id)}
                        className="office__icon"
                        src={DeleteIcon}
                        alt="Delete Icon"
                      />
                    </div>
                    <h4 className="job-rate">
                      ${job.payMin}-{job.payMax} hourly
                    </h4>
                  </div>
                </div>
                <div className="office__jobs-bottom">
                  <div className="office__bottom-left">
                    <p className="list-details">⭐️ 5.0 Reviews</p>
                    <p className="list-details">Office: {office.name}</p>
                    <p className="list-details">
                      Available shift: {job.jobTitle}
                    </p>
                    <p className="list-details">
                      Job details: {job.description}
                    </p>
                    <p className="list-details">
                      Date: {dateFormat(job.dateStart, "mmmm d, yyyy")} -{" "}
                      {dateFormat(job.dateEnd, "mmmm d, yyyy")}
                    </p>
                    <p className="list-details">
                      Contact: {office.contactName} - {office.contactPosition}
                    </p>
                  </div>
                  <div className="office__bottom-right">
                    <img
                      className="office__bottom-img"
                      src={`../src/assets/images/office-${office.id}.jpg`}
                      alt="Image of dental office"
                    />
                  </div>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OfficesList;
