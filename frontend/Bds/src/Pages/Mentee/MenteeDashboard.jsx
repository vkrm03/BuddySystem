import React, { useState } from "react";
import DashboardNav from "../DashNav.jsx";
import MenteeSidebar from "./MenteeSidebar.jsx";
import Question from "./Question.jsx";
import QuestionReview from "./QuestionReview.jsx";
import StdStats from "./StdStats.jsx";
import AnsReview from "./AnsReview.jsx";
import Dash from "./Dash.jsx";
import "../../styles/Dashboard.css";

const MenteeDashboard = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <DashboardNav />
      <MenteeSidebar onTabClick={handleTabClick} />
        {activeTab === "home" && <Dash />}
        {activeTab === "question" && <Question />}
        {activeTab === "ansReview" && <AnsReview />}
        {activeTab === "stdStats" && <StdStats />}
        {activeTab === "questionReview" && <QuestionReview />}
    </div>
  );
};

export default MenteeDashboard;