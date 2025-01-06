import React, { useState } from "react";
import DashboardNav from "../DashNav";
import AdminSidebar from "./AluminiSidebar";
import Dash from "./Dash";
import Question from "./Question";
import StdStats from "./StdStats";
import AnsReview from "./AnswerReview";
import QuestionReview from "./QuestionReview";
import "../../styles/Dashboard.css";

const AluminiDashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <DashboardNav />
      <AdminSidebar onTabClick={handleTabClick} />
        {activeTab === "profile" && <Dash />}
        {activeTab === "postQuestion" && <Question />}
        {activeTab === "ansReview" && <AnsReview />}
        {activeTab === "studentStats" && <StdStats />}
        {activeTab === "questionReview" && <QuestionReview />}
    </div>
  );
};

export default AluminiDashboard;