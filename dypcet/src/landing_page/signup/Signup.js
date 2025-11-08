import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    uniqueId: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || (!formData.email && !formData.uniqueId) || !formData.password) {
      setMessage("⚠️ Please fill all required fields.");
      return;
    }

    // In a real app, you'd send data to a backend API here.
    setMessage(`✅ Signup successful! Welcome, ${formData.name}`);
    setFormData({ name: "", email: "", uniqueId: "", password: "" });
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-4 p-4">
            <h2 className="text-center mb-4 text-primary fw-bold">
              College Signup
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                <small className="text-muted">
                  * You can sign up using either email or unique ID.
                </small>
              </div>

              {/* Unique ID */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Unique ID Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="uniqueId"
                  value={formData.uniqueId}
                  onChange={handleChange}
                  placeholder="Enter your college unique ID"
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary fw-semibold"
                  style={{ backgroundColor: "royalblue" }}
                >
                  Sign Up
                </button>
              </div>

              {/* Message */}
              {message && (
                <p className="text-center mt-3 fw-semibold text-success">
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
