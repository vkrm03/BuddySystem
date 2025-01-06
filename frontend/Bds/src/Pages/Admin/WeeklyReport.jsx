import React, { useState } from "react";
import "../../styles/WeeklyReport.css";

const WeeklyReport = () => {
  const reportData = {
    III: [
      {
        week: 1,
        data: [
          { rank: 1, name: "III Year Name 1", score: 95 },
          { rank: 2, name: "III Year Name 2", score: 90 },
          { rank: 3, name: "III Year Name 3", score: 85 },
        ],
      },
      {
        week: 2,
        data: [
          { rank: 1, name: "III Year Name 1", score: 98 },
          { rank: 2, name: "III Year Name 2", score: 92 },
          { rank: 3, name: "III Year Name 3", score: 85 },
        ],
      },
    ],
    II: [
      {
        week: 1,
        data: [
          { rank: 1, name: "II Year Name 1", score: 85 },
          { rank: 2, name: "II Year Name 2", score: 80 },
          { rank: 3, name: "II Year Name 3", score: 75 },
        ],
      },
      {
        week: 2,
        data: [
          { rank: 1, name: "II Year Name 1", score: 88 },
          { rank: 2, name: "II Year Name 2", score: 84 },
          { rank: 3, name: "II Year Name 3", score: 82 },
        ],
      },
    ],
    I: [
      {
        week: 1,
        data: [
          { rank: 1, name: "I Year Name 1", score: 75 },
          { rank: 2, name: "I Year Name 2", score: 70 },
          { rank: 3, name: "I Year Name 3", score: 65 },
        ],
      },
      {
        week: 2,
        data: [
          { rank: 1, name: "I Year Name 1", score: 78 },
          { rank: 2, name: "I Year Name 2", score: 74 },
          { rank: 3, name: "I Year Name 3", score: 72 },
        ],
      },
    ],
  };

  const [selectedYear, setSelectedYear] = useState("III");
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [currentReport, setCurrentReport] = useState(reportData["III"][0].data);

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setSelectedWeek(1);
    setCurrentReport(reportData[year][0].data);
  };

  const handleWeekChange = (weekNumber) => {
    setSelectedWeek(weekNumber);
    const weekData = reportData[selectedYear].find((week) => week.week === weekNumber);
    setCurrentReport(weekData.data);
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
            {reportData[selectedYear].map((week) => (
              <option key={week.week} value={week.week}>
                Week {week.week}
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
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {currentReport.map((entry, index) => (
              <tr key={index}>
                <td>{entry.rank}</td>
                <td>{entry.name}</td>
                <td>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WeeklyReport;
