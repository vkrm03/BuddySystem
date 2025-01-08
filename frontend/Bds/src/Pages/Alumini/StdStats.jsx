import React, { useState, useEffect } from "react";
import uri from "../../../public/Uri";
import "../../styles/QuestionReview.css";

const StdStats = () => {
  const [weeks, setWeeks] = useState([]);
  const [selectedWeek, setSelectedWeek] = useState("");
  const [stats, setStats] = useState([]);
  useEffect(() => {
    const fetchWeeks = async () => {
      try {
        const response = await fetch(uri + "/questions");
        const questions = await response.json();
        const weekList = questions.map((q) => `Week ${q.week}`);
        setWeeks(weekList);
        setSelectedWeek(weekList[0] || "");
      } catch (error) {
        console.error("Error fetching weeks:", error);
      }
    };
    fetchWeeks();
  }, []);

  useEffect(() => {
    if (!selectedWeek) return;

    const fetchStats = async () => {
      try {
        const weekNumber = selectedWeek.split(" ")[1];
        const response = await fetch(uri + `/student-stats/${weekNumber}`);
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };
    fetchStats();
  }, [selectedWeek]);

  return (
    <div className="main-content">
      <h1>Student Stats</h1>
      <div className="week-selector">
        <label htmlFor="week-select">Select Week:</label>
        <select
          id="week-select"
          value={selectedWeek}
          onChange={(e) => setSelectedWeek(e.target.value)}
        >
          {weeks.map((week) => (
            <option key={week} value={week}>
              {week}
            </option>
          ))}
        </select>
      </div>

      <div className="table-container">
        <table className="week-details-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Register Number</th>
              <th>Marks</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.reg}</td>
                <td>{student.marks}</td>
                <td>{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StdStats;
