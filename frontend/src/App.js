import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";

import MentorDashboard from "./pages/MentorDashboard";

import Courses from "./pages/Courses";

import Analytics from "./pages/Analytics";

import Activities from "./pages/Activities";

function ProtectedRoute({ children }) {

  const token =
    localStorage.getItem(
      "access_token"
    );

  return token
    ? children
    : <Navigate to="/" />;
}

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/mentor"
          element={
            <ProtectedRoute>
              <MentorDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />

        <Route
          path="/activities"
          element={
            <ProtectedRoute>
              <Activities />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;