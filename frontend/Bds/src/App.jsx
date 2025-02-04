import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/NavBar";
import Home from "./Pages/Home/HomeContent";
import About from "./Pages/Home/About";
import Login from "./Pages/Home/Login";
import StdDashboard from "./Pages/Student/StdDashboard";
import MenteeDashboard from "./Pages/Mentee/MenteeDashboard";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AluminiDashboard from "./Pages/Alumini/AluminiDashboard";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/alumini-dashboard" element={<AluminiDashboard />} />
        <Route path="/mentee-dashboard" element={<MenteeDashboard />} />
        <Route path="/std-dashboard" element={<StdDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
