import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CompanyDirectory from './pages/CompanyDirectory'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobApplicationPage from './pages/JobApplicationPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import AdminDashboard from './pages/AdminDashboard'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


function App() {
  

  const user = JSON.parse(localStorage.getItem("loggedInUser"));


  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <CompanyDirectory /> : <Navigate to="/login" />} />
        <Route path="/apply/:id" element={user ? <JobApplicationPage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/admin"
          element={
            user && user.role === "admin" ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  )
}

export default App
