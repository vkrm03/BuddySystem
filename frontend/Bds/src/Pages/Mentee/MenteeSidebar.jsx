import React, { useState, useEffect } from "react";
import "../../styles/SideBar.css";

const MenteeSidebar = ({ onTabClick }) => {
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
              src="https://cdn-icons-png.flaticon.com/512/8262/8262252.png  "
              alt="Student Image"
            />
          </div>
          <p>Name</p>
        </div>
        <ul>
          <li>
            <div className="sidebar-btn" onClick={() => onTabClick("home")}>
              <i className="fas fa-home"></i> Profile
            </div>
          </li>
          <li>
            <div className="sidebar-btn" onClick={() => onTabClick("question")}>
            <i class="fas fa-circle-question"></i> Questions
            </div>
          </li>
          <li>
            <div className="sidebar-btn" onClick={() => onTabClick("ansReview")}>
              <i className="fas fa-file"></i> Answer Review
            </div>
          </li>
          <li>
            <div className="sidebar-btn" onClick={() => onTabClick("stdStats")}>
              <i className="fas fa-file-alt"></i> Student Stats
            </div>
          </li>
          <li>
            <div className="sidebar-btn" onClick={() => onTabClick("questionReview")}>
            <i class="fas fa-circle-question"></i> Questions Review
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenteeSidebar;
