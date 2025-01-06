import React, { useState, useEffect } from "react";
import "../../styles/SideBar.css";

const AdminSidebar = ({ onTabClick }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setIsSmallScreen(true);
        setSidebarVisible(false);
      } else {
        setIsSmallScreen(false);
        setSidebarVisible(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      {isSmallScreen && (
        <div className="toggle-btn" onClick={toggleSidebar}>
          <i className={`fas ${isSidebarVisible ? "fa-times" : "fa-bars"}`}></i>
        </div>
      )}

      <div className={`sidebar ${isSidebarVisible ? "visible" : "hidden"}`}>
        <h1 className="dash">Dashboard</h1>
        <div className="admin-profile">
          <div className="admin-icon">
            <img
              src="https://erp.sathyabama.ac.in/assets/images/Chancellor.jpg"
              alt="Staff Image"
            />
          </div>
          <p>Admin</p>
        </div>
        <ul>
          <li>
            <div className="sidebar-btn" onClick={() => onTabClick("profile")}>
              <i className="fas fa-home"></i> Profile
            </div>
          </li>
          <li>
            <div className="sidebar-btn" onClick={() => onTabClick("addMentee")}>
              <i className="fas fa-user-plus"></i> Add Student Mentee
            </div>
          </li>
          <li>
            <div className="sidebar-btn" onClick={() => onTabClick("weeklyReport")}>
              <i className="fas fa-file-alt"></i> Weekly Report
            </div>
          </li>
          <li>
            <div className="sidebar-btn" onClick={() => onTabClick("studentStats")}>
              <i className="fas fa-file-alt"></i> Student Statistics
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminSidebar;
