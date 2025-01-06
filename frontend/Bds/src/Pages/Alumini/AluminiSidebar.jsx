import React, { useState, useEffect } from "react";
import "../../styles/SideBar.css";

const AluminiSidebar = ({ onTabClick }) => {
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
              src="https://media.istockphoto.com/id/2002964131/vector/graduate-icon.jpg?s=612x612&w=0&k=20&c=UAVVBer55W6Qr5MQepFTxT8B5UMGcvq8tdDZT7I8z6s="
              alt="Staff Image"
            />
          </div>
          <p>Alumini</p>
        </div>
        <ul>
          <li>
            <div className="sidebar-btn" onClick={() => onTabClick("profile")}>
              <i className="fas fa-home"></i> Profile
            </div>
          </li>
          <li>
            <div className="sidebar-btn" onClick={() => onTabClick("postQuestion")}>
            <i class="fas fa-circle-question"></i> Question
            </div>
          </li>
          <li>
            <div className="sidebar-btn" onClick={() => onTabClick("ansReview")}>
              <i className="fas fa-file"></i> Answer Review
            </div>
          </li>
          <li>
            <div className="sidebar-btn" onClick={() => onTabClick("studentStats")}>
              <i className="fas fa-file-alt"></i> Student Stats
            </div>
          </li>
          <li>
            <div className="sidebar-btn" onClick={() => onTabClick("questionReview")}>
              <i className="fas fa-file-alt"></i> Question Review
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AluminiSidebar;
