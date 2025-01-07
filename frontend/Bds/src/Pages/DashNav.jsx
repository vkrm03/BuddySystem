import React from 'react';
import '../styles/DashboardNav.css';

const DashboardNav = () => {
    const handleLogout = () => {
        localStorage.removeItem("reg");
        localStorage.removeItem("role");
        window.location.href = "/login";
    }
    return (
        <nav className="dashboard-nav">
            <div className="logo">
                <img src="https://erp.sathyabama.ac.in/assets/images/logo-new.png" alt="Logo" />
            </div>
            <div className="user-profile">
                <img src="https://erp.sathyabama.ac.in/assets/images/Chancellor.jpg" alt="User Avatar" />
                <div className="username">{localStorage.getItem("role") == "adm" ? "Admin" : localStorage.getItem("role") == "alu" ? "Alumini" : localStorage.getItem("role") == "std" ? "Student" : "Account"}</div>
                <a href="#" className="logout-btn" onClick={handleLogout}>Logout  <i class="fas fa-door-open"></i> </a>
            </div>
        </nav>
    );
};

export default DashboardNav;