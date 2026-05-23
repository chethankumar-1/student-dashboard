# 📊 Student Progress Dashboard (Full Stack)

A full-stack web application that tracks student learning progress across courses, visualizes insights, and provides role-based dashboards for students and mentors. The system includes authentication, analytics, CSV export, and learning activity tracking.

---

## 🚀 Project Overview

The **Student Progress Dashboard** helps students and mentors track learning progress efficiently.

It provides:
- Course-wise progress tracking
- Completed lessons & time spent analysis
- Visual analytics (trend charts, pie/donut charts)
- Role-based dashboards (Student & Mentor)
- CSV export for reports
- Activity tracking system

---

## ✨ Features

### 🔐 Authentication
- JWT Authentication (Username & Password)
- Secure token-based access
- Role-based access control (Student / Mentor)

### 👨‍🎓 Student Features
- View enrolled courses
- Track completed lessons
- Monitor time spent per lesson
- Personal analytics dashboard

### 👨‍🏫 Mentor Features
- View student progress
- Access aggregated analytics
- Monitor activity logs

### 📊 Analytics & Visualization
- Progress trend (time series data)
- Completion distribution (pie/donut charts)
- Course-wise performance tracking

### 📁 Export Feature
- Download student progress as CSV
- Filter-ready backend export API

### 📌 Activity Tracking
- Logs student actions (lesson completion, etc.)

---

## 🧰 Tech Stack

### Backend
- Django 5.x
- Django REST Framework
- SimpleJWT Authentication
- SQLite (can be upgraded to PostgreSQL)
- CORS Headers

### Frontend
- React.js
- React Router
- Axios
- SCSS for styling

### Tools
- Git & GitHub
- Postman (API testing)

---

## 📡 API Documentation

Base URL:

```bash
http://127.0.0.1:8000/api/


## 🔑 Demo Credentials

### 👨‍🎓 Student Login
Username: student1  
Password: student123


### 🔐 Authentication

#### Login


# 🖼️ Screenshots

## Login Page

<img width="1908" height="1028" alt="image" src="https://github.com/user-attachments/assets/2f3d5527-cce8-4ff5-af89-e26efd300bd6" />


## Student Dashboard

<img width="1901" height="1040" alt="image" src="https://github.com/user-attachments/assets/46dd745c-4748-4de4-913c-b09ae1aeb340" />


## Mentor Dashboard

<img width="1915" height="1023" alt="image" src="https://github.com/user-attachments/assets/3a4fd715-9112-4197-b84b-a7de1a64ec3b" />


## Analytics Dashboard

<img width="1907" height="1028" alt="image" src="https://github.com/user-attachments/assets/98f9c9d9-15d6-4717-bd8d-500f1ff8b6a0" />


