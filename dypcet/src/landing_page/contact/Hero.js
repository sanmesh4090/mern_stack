import React from "react";

function Hero() {
  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">
        D. Y. Patil College of Engineering and Technology, Kolhapur
      </h1>

      <div className="card shadow p-4 bg-light">
        <h5 className="mb-3 text-secondary">
          Address:
        </h5>
        <p>
          D. Y. Patil College of Engineering and Technology,<br />
          Kasaba Bawada, Kolhapur - 416006
        </p>

        <h5 className="mt-4 mb-2 text-secondary">
          Contact Details:
        </h5>
        <p>
          <strong>Tel:</strong> 0231-2601431 / 32 / 33 <br />
          <strong>Email:</strong>{" "}
          <a href="mailto:info.dypcet@dypgroup.edu.in">
            info.dypcet@dypgroup.edu.in
          </a>
        </p>

        <h5 className="mt-4 mb-2 text-secondary">
          Job Applications:
        </h5>
        <p>
          Send your resumes to:{" "}
          <a href="mailto:career.dypcet@dypgroup.edu.in">
            career.dypcet@dypgroup.edu.in
          </a>
        </p>

        <h5 className="mt-4 mb-2 text-secondary">
          Quick Links:
        </h5>
        <p>
          <a
            href="#"
            className="btn btn-outline-primary me-3"
          >
            Student Document Verification
          </a>
          <a
            href="#"
            className="btn btn-outline-success"
          >
            Online Application for LC/TC
          </a>
        </p>

        <small className="text-danger">
          (Do not send any email for student document verification)
        </small>
      </div>
    </div>
  );
}

export default Hero;
