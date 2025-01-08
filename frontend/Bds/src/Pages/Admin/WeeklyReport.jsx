import React, { useState, useEffect } from "react";
import axios from "axios";
import uri from "../../../public/Uri";
import "../../styles/WeeklyReport.css";

const WeeklyReport = () => {
  const [selectedYear, setSelectedYear] = useState("III");
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [currentReport, setCurrentReport] = useState([]);
  
  // Fetch data for selected year and week
  const fetchReportData = async (year, week) => {
    try {
      const response = await axios.get(uri + `/student-stats/${year}/${week}`);
      setCurrentReport(response.data); // Store the fetched data
    } catch (error) {
      console.error("Error fetching weekly report:", error);
    }
  };

  useEffect(() => {
    // Fetch the data whenever year or week changes
    fetchReportData(selectedYear, selectedWeek);
  }, [selectedYear, selectedWeek]); // Run when selectedYear or selectedWeek changes

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setSelectedWeek(1); // Reset to week 1 when year changes
  };

  const handleWeekChange = (weekNumber) => {
    setSelectedWeek(weekNumber);
  };

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
            {/* Assume the backend provides all available weeks for the selected year */}
            {[1, 2, 3, 4, 5].map((week) => (
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
