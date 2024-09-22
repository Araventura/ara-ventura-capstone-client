import React from "react";
import "./PostJob.scss";
import { Link } from "react-router-dom";
import CloseIcon from "../../assets/icon/close.svg";

function PostJob() {
  return (
    <div className="post">
      <div className="post__top">
        <Link className="post__link">
          <button className="post__button">Back</button>
        </Link>
        <h2 className="post__title">Post a Job</h2>
        <Link>
          <img src={CloseIcon} alt="Close Icon" />
        </Link>
      </div>
      <div>
        <form className="form" action="">
          <label className="form__label" htmlFor="">
            What type of dental professional are you looking for?:
          </label>
          <input className="form__input" type="text" />
          <label className="form__label" htmlFor="">
            The description of this job
          </label>
          <input className="form__input" type="text" />
          <label className="form__label" htmlFor="">
            What dates do you need this service for?
          </label>
          <input className="form__input" type="text" />
          <label className="form__label" htmlFor="">
            The minimum hourly rate
          </label>
          <input className="form__input" type="text" />
          <label className="form__label" htmlFor="">
            The maximum hourly rate
          </label>
          <input className="form__input" type="text" />
          <label className="form__label" htmlFor="">
            The job status
          </label>
          <input className="form__input" type="text" />
        </form>
      </div>
      <Link>
        <button>Post</button>
      </Link>
    </div>
  );
}

export default PostJob;
