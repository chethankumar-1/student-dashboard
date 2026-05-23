import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.scss";

function Sidebar() {

  const exportCSV = async () => {

    try {
      const token = localStorage.getItem("access_token");

      console.log("TOKEN:", token); // debug

      const res = await fetch("http://127.0.0.1:8000/api/export/csv/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.log("ERROR RESPONSE:", errorText);
        throw new Error("Failed to download CSV");
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "student_progress.csv";
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error("CSV Export Error:", error);
      alert("Failed to download CSV. Please login again.");
    }
  };

  return (
    <div className="sidebar">

      <h2>Student App</h2>

      <Link to="/dashboard">Dashboard</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/analytics">Analytics</Link>
      <Link to="/activities">Activities</Link>
      <Link to="/mentor">Mentor</Link>

      {/* EXPORT CSV */}
      <button onClick={exportCSV} className="sidebar-btn">
        Export CSV
      </button>

    </div>
  );
}

export default Sidebar;