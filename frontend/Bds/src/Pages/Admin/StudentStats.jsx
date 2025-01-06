import React, { useState } from "react";
import "../../styles/StudentStats.css";

const students = [
  { name: "kavin", year: "Third Year", progress: 85 },
  { name: "Ajay", year: "Second Year", progress: 75 },
  { name: "Vijay", year: "Third Year", progress: 90 },
  { name: "karun", year: "Second Year", progress: 65 },
  { name: "arun", year: "First Year", progress: 65 },
];

const StudentStats = () => {
  const [selectedYear, setSelectedYear] = useState("All");

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const filteredStudents =
    selectedYear === "All"
      ? students
      : students.filter((student) => student.year === selectedYear);

  return (
    <div className="main-content">
      <h1>Student Progress Statistics</h1>
      <div className="filter-container">
        <label htmlFor="year-select">Filter by Year:</label>
        <select
          id="year-select"
          value={selectedYear}
          onChange={(e) => handleYearChange(e.target.value)}
        >
          <option value="All">All Years</option>
          <option value="First Year">First Year</option>
          <option value="Second Year">Second Year</option>
          <option value="Third Year">Third Year</option>
        </select>
      </div>
      <div className="stats-container">
        <div className="card-container">
          {filteredStudents.map((student, index) => (
            <div key={index} className="student-card">
              <div className="card-content">
                <h2 className="student-name">{student.name}</h2>
                <p className="student-year">{student.year}</p>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${student.progress}%` }}
                  ></div>
                </div>
                <span className="progress-percentage">{student.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentStats;
