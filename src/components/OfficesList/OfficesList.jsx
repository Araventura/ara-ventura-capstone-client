import React, { useState, useEffect } from "react";
import "./OfficesList.scss";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import EditIcon from "../../assets/icon/edit.png";
import DeleteIcon from "../../assets/icon/delete.png";

function OfficesList() {
  const params = useParams();

  const [officeJobsList, setOfficesJobsList] = useState([]);
  const [office, setOffice] = useState([]);

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

  // const jobsInOffice = officeJobsList.map((job) => {
  //   const office = officesList.find((office) => office.id === job.officeId);

  //   return {
  //     ...job,
  //     officeName: office?.name || "Office not found",
  //     officeAddress: office?.address || "N/A",
  //     officeDoctor: office?.practicingDoctor || "N/A",
  //     officeContact: office?.contactName || "N/A",
  //     officeContactPosition: office?.contactPosition || "N/A",
  //     officePhone: office?.phone || "N/A",
  //   };
  // });

  return (
    <div className="office">
      <div className="office__details">
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
        <h4 className="office__jobs-title">Active job listings:</h4>
        <ul className="office__jobs-list">
          {office.map((job) => (
            <Link key={job.id} className="office__jobs-link">
              <li className="office__jobs-item">
                <div className="office__jobs-top">
                  <div className="office__top-left">
                    <img
                      className="office__top-img"
                      src="../src/assets/images/doctor-1.jpg"
                      alt="doctor's image"
                    />
                    <div className="office__top-details">
                      <h4 className="doctor-name">
                        {job.id}. {job.officeDoctor}
                      </h4>
                      <h5 className="office-address ">address</h5>
                    </div>
                  </div>
                  <div className="office__top-right">
                    <div className="office__icon-wrapper">
                      <img
                        className="office__icon"
                        src={EditIcon}
                        alt="Edit Icon"
                      />
                      <Link>
                        <img
                          className="office__icon"
                          src={DeleteIcon}
                          alt="Delete Icon"
                        />
                      </Link>
                    </div>
                    <h4 className="job-rate">$30-38 hourly</h4>
                  </div>
                </div>
                <div className="office__jobs-bottom">
                  <div className="office__bottom-left">
                    <p className="list-details">⭐️ 5.0 Reviews</p>
                    <p className="list-details">Office: Office name</p>
                    <p className="list-details">Available shift</p>
                    <p className="list-details">Job details</p>
                    <p className="list-details">Date: </p>
                    <p className="list-details">
                      Contact: Name of contact - contact position
                    </p>
                  </div>
                  <div className="office__bottom-right">
                    <img
                      className="office__bottom-img"
                      src="../src/assets/images/office-1.jpg"
                      alt="Image of dental office"
                    />
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OfficesList;
