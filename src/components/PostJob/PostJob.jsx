import React from "react";
import "./PostJob.scss";
import { Link } from "react-router-dom";
import CloseIcon from "../../assets/icon/close.svg";

function PostJob() {
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
          <form className="form" action="">
            <label className="form__label" htmlFor="">
              What type of dental professional are you looking for?:
            </label>
            <input
              className="form__input"
              type="text"
              placeholder="Type here"
            />
            <label className="form__label" htmlFor="">
              The description of this job
            </label>
            <textarea
              className="form__input"
              type="text"
              placeholder="Add description of job"
            ></textarea>
            <label className="form__label" htmlFor="">
              What dates do you need this service for?
            </label>
            <input
              className="form__input"
              type="text"
              placeholder="YYYY-MM-DD"
            />
            <label className="form__label" htmlFor="">
              The minimum hourly rate
            </label>
            <input className="form__input" type="text" placeholder="Minimum" />
            <label className="form__label" htmlFor="">
              The maximum hourly rate
            </label>
            <input className="form__input" type="text" placeholder="Maximum" />
            <label className="form__label" htmlFor="">
              The job status
            </label>
            <input
              className="form__input"
              type="text"
              placeholder="Open or Closed"
            />
            <Link className="form__link">
              <button className="form__button">Post</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostJob;
