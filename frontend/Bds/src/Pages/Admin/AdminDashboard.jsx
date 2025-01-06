import React, { useState } from "react";
import DashboardNav from "../DashNav";
import AdminSidebar from "./AdminSideBar";
import Dash from "./Dash";
import AddMentee from "./AddMentee";
import WeeklyReport from "./WeeklyReport"; 
import StudentStats from "./StudentStats";
import "../../styles/Dashboard.css";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <DashboardNav />
      <AdminSidebar onTabClick={handleTabClick} />
        {activeTab === "profile" && <Dash />}
        {activeTab === "addMentee" && <AddMentee />}  
        {activeTab === "weeklyReport" && <WeeklyReport />}
        {activeTab === "studentStats" && <StudentStats />}
    </div>
  );
};

export default AdminDashboard;