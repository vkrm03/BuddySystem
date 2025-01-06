import React from 'react';
import '../styles/DashboardNav.css';

const DashboardNav = () => {
    return (
        <nav className="dashboard-nav">
            <div className="logo">
                <img src="https://erp.sathyabama.ac.in/assets/images/logo-new.png" alt="Logo" />
            </div>
            <div className="user-profile">
                <img src="https://erp.sathyabama.ac.in/assets/images/Chancellor.jpg" alt="User Avatar" />
                <div className="username">ADMIN</div>
                <a href="/logout" className="logout-btn">Logout  <i class="fas fa-door-open"></i> </a>
            </div>
        </nav>
    );
};

export default DashboardNav;