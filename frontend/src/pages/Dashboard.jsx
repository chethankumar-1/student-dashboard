import React, {
  useEffect,
  useState
} from "react";

import axios from "axios";

import Sidebar from "../components/Sidebar";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend
} from "recharts";

import "../styles/dashboard.scss";

function Dashboard() {

  const [data, setData] =
    useState(null);

  const handleLogout = () => {

    localStorage.clear();

    window.location.href = "/";
  };

  useEffect(() => {

    const token =
      localStorage.getItem(
        "access_token"
      );

    axios.get(

      "http://127.0.0.1:8000/api/dashboard/",

      {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }

    )

    .then((response) => {

      setData(response.data);

    });

  }, []);

  if(!data) {

    return <h1>Loading...</h1>;
  }

  const pieData = [

    {
      name: "Completed",
      value: data.completed_lessons
    },

    {
      name: "Remaining",
      value: 10
    }
  ];

  return (

    <div className="main-layout">

      <Sidebar />

      <div className="dashboard-content">

        <div className="navbar">

          <h1>
            Student Dashboard
          </h1>

          <button onClick={handleLogout}>
            Logout
          </button>

        </div>

        <div className="cards">

          <div className="card">

            <h2>
              Completed Lessons
            </h2>

            <h1>
              {data.completed_lessons}
            </h1>

          </div>

          <div className="card">

            <h2>
              Total Time
            </h2>

            <h1>
              {data.time_spent.time_spent__sum}
            </h1>

          </div>

        </div>

        <div className="charts">

          <div className="chart-box">

            <h2>
              Completion Status
            </h2>

            <PieChart
              width={350}
              height={300}
            >

              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={100}
                label
              >

                <Cell fill="#2563eb" />

                <Cell fill="#10b981" />

              </Pie>

              <Tooltip />

            </PieChart>

          </div>

          <div className="chart-box">

            <h2>
              Course Progress
            </h2>

            <LineChart
              width={500}
              height={300}
              data={data.course_progress}
            >

              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="lesson__course__title"
              />

              <YAxis />

              <Tooltip />

              <Legend />

              <Line
                type="monotone"
                dataKey="total"
                stroke="#2563eb"
              />

            </LineChart>

          </div>

        </div>

        <div className="recommendation">

          <h2>
            Recommended Next Step
          </h2>

          <p>
            {data.recommendation}
          </p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;