import React, {
  useEffect,
  useState
} from "react";

import axios from "axios";

import Sidebar from "../components/Sidebar";

function Activities() {

  const [activities, setActivities] =
    useState([]);

  useEffect(() => {

    axios.get(
      "http://127.0.0.1:8000/api/activity/"
    )

    .then((response) => {

      setActivities(response.data);
    });

  }, []);

  return (

    <div style={{display:"flex"}}>

      <Sidebar />

      <div style={{padding:"20px"}}>

        <h1>Activity Events</h1>

        <table>

          <thead>

            <tr>

              <th>Action</th>

              <th>Date</th>

            </tr>

          </thead>

          <tbody>

            {
              activities.map((item) => (

                <tr key={item.id}>

                  <td>{item.action}</td>

                  <td>{item.created_at}</td>

                </tr>
              ))
            }

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Activities;