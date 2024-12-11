/* eslint-disable react/prop-types */

import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="flex gap-8 m-2">
        <figure>
          <img className="w-16" src={company_logo} />
        </figure>
        <div>
          <h4 className="text-2xl">{company}</h4>
          <p className="flex gap-1 items-center">
            <FaMapMarkerAlt /> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="badge badge-secondary">NEW</div>
        <p>{description}</p>
        <div className="flex gap-2 flex-wrap">
          {requirements.map((skill, idx) => (
            <p
              className="border rounded-md text-center px-2 hover:text-blue-300 hover:bg-black"
              key={idx}
            >
              {skill}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end items-center">
          <p className="flex items-center ">
            Salary: <FaDollarSign /> {salaryRange.min} - {salaryRange.max}{" "}
            {salaryRange.currency}
          </p>
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">Apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
