import React, { useState } from "react";
import "../../styles/WeeklyReport.css";

const WeeklyReport = () => {
  const [selectedYear, setSelectedYear] = useState("III");
  const [selectedWeek, setSelectedWeek] = useState(1);

  // Dummy data for demonstration
  const dummyReports = {
    III: {
      1: [
        { rank: 1, name: "Alice", marks: 95, grade: "A" },
        { rank: 2, name: "Bob", marks: 90, grade: "A" },
      ],
      2: [
        { rank: 1, name: "Charlie", marks: 92, grade: "A" },
        { rank: 2, name: "David", marks: 88, grade: "B" },
      ],
    },
    II: {
      1: [
        { rank: 1, name: "Eve", marks: 85, grade: "B" },
        { rank: 2, name: "Frank", marks: 80, grade: "B" },
      ],
      2: [
        { rank: 1, name: "Grace", marks: 89, grade: "B+" },
        { rank: 2, name: "Hank", marks: 84, grade: "B" },
      ],
    },
    I: {
      1: [
        { rank: 1, name: "Ivy", marks: 75, grade: "C" },
        { rank: 2, name: "Jack", marks: 70, grade: "C" },
      ],
      2: [
        { rank: 1, name: "Kara", marks: 82, grade: "B" },
        { rank: 2, name: "Leo", marks: 78, grade: "C+" },
      ],
    },
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setSelectedWeek(1);
  };

  const handleWeekChange = (weekNumber) => {
    setSelectedWeek(weekNumber);
  };

  const currentReport = dummyReports[selectedYear]?.[selectedWeek] || [];
  const totalWeeks = Object.keys(dummyReports[selectedYear] || {}).map(Number);

  return (
    <div className="main-content">
      <h1>Weekly Report</h1>

      <div className="selectors">
        <div className="year-selector">
          <label htmlFor="year-select">Select Year: </label>
          <select
            id="year-select"
            value={selectedYear}
            onChange={(e) => handleYearChange(e.target.value)}
          >
            <option value="III">III Year</option>
            <option value="II">II Year</option>
            <option value="I">I Year</option>
          </select>
        </div>

        <div className="week-selector">
          <label htmlFor="week-select">Select Week: </label>
          <select
            id="week-select"
            value={selectedWeek}
            onChange={(e) => handleWeekChange(Number(e.target.value))}
          >
            {totalWeeks.map((week) => (
              <option key={week} value={week}>
                Week {week}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="table-container">
        <table className="weekly-report-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Marks</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {currentReport.length > 0 ? (
              currentReport.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.rank}</td>
                  <td>{entry.name}</td>
                  <td>{entry.marks}</td>
                  <td>{entry.grade}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No data available for this week.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WeeklyReport;
