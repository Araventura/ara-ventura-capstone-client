import "./PostJob.scss";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import CloseIcon from "../../assets/icon/close.svg";

function PostJob() {
  const params = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    officeId: params.id,
    jobTitle: "",
    description: "",
    dateStart: "",
    dateEnd: "",
    payMin: "",
    payMax: "",
    status: "Open",
  });

  const handleInputChange = (e) => {
    const nextFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(nextFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const sendData = await axios.post("http://localhost:8080/jobs", formData);
      if (sendData.status === 201) {
        setFormData({
          officeId: params.id,
          jobTitle: "",
          description: "",
          dateStart: "",
          dateEnd: "",
          payMin: "",
          payMax: "",
          status: "Open",
        });
        navigate("/offices/4");
      }
    } catch (e) {
      console.error("There was an error adding the item", e);
    }
  };
  return (
    <div className="post">
      <div className="post__wrapper">
        <div className="post__top">
          <Link to={"/offices/4"} className="post__link">
            <button className="post__button">Back</button>
          </Link>
          <h2 className="post__title">Post a Job</h2>
          <Link to={"/offices/4"} className="post__close">
            <img className="post__close-img" src={CloseIcon} alt="Close Icon" />
          </Link>
        </div>
        <div className="post__bottom">
          <form
            onChange={(e) => handleInputChange(e)}
            className="form"
            action=""
            onSubmit={(e) => handleSubmit(e)}
          >
            <label className="form__label" htmlFor="" for="jobs">
              What type of dental professional are you looking for?:
            </label>
            <select className="form__input" id="jobs" name="jobTitle">
              <option value="Dental Hygienist">Dental Hygienist</option>
              <option value="Front Desk Receptionist">
                Front Desk Receptionist
              </option>
              <option value="Dental Assistant">Dental Assistant</option>
              <option value="Sterilization Technician">
                Sterilization Technician
              </option>
              <option value="Office Manager">Office Manager</option>
            </select>
            <label className="form__label" htmlFor="">
              The description of this job
            </label>
            <textarea
              className="form__input"
              name="description"
              placeholder="Add description of job"
              required
            ></textarea>
            <label className="form__label" htmlFor="">
              What dates do you need this service for? START date
            </label>
            <input
              className="form__input"
              name="dateStart"
              placeholder="YYYY-MM-DD"
              type="date"
              min="2024-09-01"
              max="2025-09-01"
              required
            />
            <label className="form__label" htmlFor="">
              What dates do you need this service for? END date
            </label>
            <input
              className="form__input"
              name="dateEnd"
              placeholder="YYYY-MM-DD"
              type="date"
              min="2024-09-01"
              max="2025-09-01"
              required
            />
            <label className="form__label" htmlFor="">
              The minimum hourly rate
            </label>
            <input
              className="form__input"
              name="payMin"
              placeholder="Minimum"
              type="number"
              required
            />
            <label className="form__label" htmlFor="">
              The maximum hourly rate
            </label>
            <input
              className="form__input"
              name="payMax"
              placeholder="Maximum"
              type="number"
              required
            />
            <button type="submit" className="form__button">
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostJob;
