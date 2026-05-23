import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.scss";

function MentorDashboard() {

  const navigate = useNavigate();

  return (
    <div className="dashboard">

      <div className="navbar">

        <h1>Mentor Dashboard</h1>

         <button onClick={() => navigate("/dashboard")}>
          ⬅ Back
        </button>

      </div>

      <div className="cards">
        <div className="card">
          <h2>Total Students</h2>
          <h1>120</h1>
        </div>

        <div className="card">
          <h2>Active Courses</h2>
          <h1>12</h1>
        </div>
      </div>

    </div>
  );
}

export default MentorDashboard;