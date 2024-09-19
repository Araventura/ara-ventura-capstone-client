import { useEffect, useState } from "react";
import "./JobDetails.scss";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import dateFormat from "dateformat";
import GoogleMaps from "../../assets/images/google-maps.png";

function JobDetails() {
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
    <div className="details">
      <Link>
        <button>Back</button>
      </Link>
      <div className="details__left">
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h4>doctor name</h4>
            <h5>address</h5>
          </div>
        </div>
        <div>
          <p>Reviews</p>
          <p>office:</p>
          <p>looking for</p>
          <p>date</p>
          <p>contact</p>
          <p>Job details</p>
        </div>
        <Link mailto="">
          <button>Get in touch</button>
        </Link>
      </div>
      <div className="details__right">
        <img className="details__right-image" src={GoogleMaps} alt="" />
      </div>
    </div>
  );
}

export default JobDetails;
