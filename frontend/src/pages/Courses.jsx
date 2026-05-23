import React, {
  useEffect,
  useState
} from "react";

import axios from "axios";

import Sidebar from "../components/Sidebar";

function Courses() {

  const [courses, setCourses] =
    useState([]);

  useEffect(() => {

    axios.get(
      "http://127.0.0.1:8000/api/lessons/"
    )

    .then((response) => {

      setCourses(response.data);
    });

  }, []);

  return (

    <div style={{display:"flex"}}>

      <Sidebar />

      <div style={{padding:"20px"}}>

        <h1>Courses & Lessons</h1>

        {
          courses.map((item) => (

            <div
              key={item.id}
              className="card"
            >

              <h2>{item.title}</h2>

              <p>
                Duration:
                {item.duration} mins
              </p>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default Courses;