import React, {
  useEffect,
  useState
} from "react";

import axios from "axios";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

import Sidebar from "../components/Sidebar";

function Analytics() {

  const [data, setData] =
    useState([]);

  useEffect(() => {

    axios.get(
      "http://127.0.0.1:8000/api/timeseries/"
    )

    .then((response) => {

      setData(response.data);
    });

  }, []);

  return (

    <div style={{display:"flex"}}>

      <Sidebar />

      <div style={{padding:"20px"}}>

        <h1>Analytics</h1>

        <LineChart
          width={700}
          height={400}
          data={data}
        >

          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis dataKey="date" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="total"
            stroke="#2563eb"
          />

        </LineChart>

      </div>

    </div>
  );
}

export default Analytics;