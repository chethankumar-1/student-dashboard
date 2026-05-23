import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import "../styles/login.scss";

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = async () => {

    try {

      const response = await axios.post(

        "http://127.0.0.1:8000/api/token/",

        {
          username,
          password
        }
      );

      localStorage.setItem(
        "access_token",
        response.data.access
      );

      localStorage.setItem(
        "refresh_token",
        response.data.refresh
      );

      if(username === "mentor1") {

        navigate("/mentor");

      } else {

        navigate("/dashboard");
      }

    } catch(error) {

      alert("Invalid Credentials");
    }
  };

  return (

    <div className="login-page">

      <div className="login-card">

        <h1>
          Progressive Student Dashboard
        </h1>

        <p>
          Track learning progress
        </p>

        <input
          type="text"
          placeholder="Username"
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={handleLogin}>
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;