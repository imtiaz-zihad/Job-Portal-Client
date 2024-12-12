import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();

  return (
    <div className="p-10 font-poppins bg-gray-900 text-gray-200">
      <div className="max-w-3xl mx-auto bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="p-5 text-center border-b border-gray-700">
          <img
            src={job.company_logo}
            alt={`${job.company} Logo`}
            className="w-28 h-28 rounded-full mb-4 border-4 border-gray-700 mx-auto"
          />
          <h1 className="text-2xl text-white mb-2">{job.title}</h1>
          <h3 className="text-lg text-gray-400">{job.company}</h3>
        </div>

        <div className="p-5">
          <p>
            <strong>Location:</strong> {job.location}
          </p>
          <p>
            <strong>Job Type:</strong> {job.jobType}
          </p>
          <p>
            <strong>Category:</strong> {job.category}
          </p>
          <p>
            <strong>Application Deadline:</strong> {job.applicationDeadline}
          </p>

          <h4 className="mt-5 text-lg text-white">Salary Range</h4>
          <p>
            {job.salaryRange.min.toLocaleString()} -{" "}
            {job.salaryRange.max.toLocaleString()}{" "}
            {job.salaryRange.currency.toUpperCase()}
          </p>

          <h4 className="mt-5 text-lg text-white">Description</h4>
          <p>{job.description}</p>

          <h4 className="mt-5 text-lg text-white">Requirements</h4>
          <ul className="list-disc pl-5">
            {job.requirements.map((requirement, index) => (
              <li key={index} className="mb-1">
                {requirement}
              </li>
            ))}
          </ul>

          <h4 className="mt-5 text-lg text-white">Responsibilities</h4>
          <ul className="list-disc pl-5">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index} className="mb-1">
                {responsibility}
              </li>
            ))}
          </ul>

          <h4 className="mt-5 text-lg text-white">Contact Information</h4>
          <p>
            <strong>HR Name:</strong> {job.hr_name}
          </p>
          <p>
            <strong>HR Email:</strong>{" "}
            <a
              href={`mailto:${job.hr_email}`}
              className="text-blue-400 hover:underline"
            >
              {job.hr_email}
            </a>
          </p>

          <p
            className={`mt-5 font-bold ${
              job.status === "active" ? "text-green-500" : "text-red-500"
            }`}
          >
            Status: {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
          </p>
        </div>

        <div className="flex justify-end p-4">
        <Link to={`/jobApply/${job._id}`}>
        <button className="btn btn-primary rounded-xl text-white hover:text-green-300">
            Apply now
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
