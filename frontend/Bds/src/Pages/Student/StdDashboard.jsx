import React, { useState } from "react";
import DashboardNav from "../DashNav.jsx";
import StdSidebar from "./StdSideBar.jsx";
import Question from "./Question.jsx";
import StdStats from "./MyStats.jsx";
import Leaderboard from "./LeaderBoard.jsx";
import Dash from "./Dash.jsx";
import "../../styles/Dashboard.css";

const StdDashboard = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <DashboardNav />
      <StdSidebar onTabClick={handleTabClick} />
        {activeTab === "home" && <Dash />}
        {activeTab === "question" && <Question />}
        {activeTab === "myStats" && <StdStats />}
        {activeTab === "leaderBoard" && <Leaderboard />}
    </div>
  );
};

export default StdDashboard;