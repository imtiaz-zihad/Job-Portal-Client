
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#1e1e2f",
        color: "#eaeaea",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          backgroundColor: "#2c2c3e",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "20px",
            textAlign: "center",
            borderBottom: "1px solid #444",
          }}
        >
          <img
            src={job.company_logo}
            alt={`${job.company} Logo`}
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              marginBottom: "10px",
              border: "3px solid #444",
            }}
          />
          <h1 style={{ color: "#fff", fontSize: "24px", margin: "10px 0" }}>
            {job.title}
          </h1>
          <h3 style={{ color: "#aaa", fontWeight: "400" }}>{job.company}</h3>
        </div>

        <div style={{ padding: "20px" }}>
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

          <h4 style={{ marginTop: "20px", color: "#fff" }}>Salary Range</h4>
          <p>
            {job.salaryRange.min.toLocaleString()} -{" "}
            {job.salaryRange.max.toLocaleString()}{" "}
            {job.salaryRange.currency.toUpperCase()}
          </p>

          <h4 style={{ marginTop: "20px", color: "#fff" }}>Description</h4>
          <p>{job.description}</p>

          <h4 style={{ marginTop: "20px", color: "#fff" }}>Requirements</h4>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            {job.requirements.map((requirement, index) => (
              <li key={index} style={{ marginBottom: "5px" }}>
                {requirement}
              </li>
            ))}
          </ul>

          <h4 style={{ marginTop: "20px", color: "#fff" }}>Responsibilities</h4>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            {job.responsibilities.map((responsibility, index) => (
              <li key={index} style={{ marginBottom: "5px" }}>
                {responsibility}
              </li>
            ))}
          </ul>

          <h4 style={{ marginTop: "20px", color: "#fff" }}>
            Contact Information
          </h4>
          <p>
            <strong>HR Name:</strong> {job.hr_name}
          </p>
          <p>
            <strong>HR Email:</strong>{" "}
            <a
              href={`mailto:${job.hr_email}`}
              style={{ color: "#1f8efa", textDecoration: "none" }}
            >
              {job.hr_email}
            </a>
          </p>

          <p
            style={{
              marginTop: "20px",
              color: job.status === "active" ? "#28a745" : "#dc3545",
              fontWeight: "bold",
            }}
          >
            Status: {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
          </p>
        </div>
        <div className="flex justify-end">
          <button className="btn btn-primary rounded-xl m-4 text-white hover:text-green-300">Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
