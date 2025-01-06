import React, { useState } from "react";
import "../../styles/QuestionReview.css";

const StdStats = () => {
  const studentData = {
    "Week 1": [
      { name: "Aurn", marks: 100, grade: "A+" },
      { name: "Mahesh", marks: 95, grade: "A" },
    ],
    "Week 2": [
      { name: "Aurn", marks: 88, grade: "B+" },
      { name: "Mahesh", marks: 92, grade: "A" },
    ],
    "Week 3": [
      { name: "Aurn", marks: 95, grade: "A" },
      { name: "Mahesh", marks: 89, grade: "B+" },
    ],
  };

  const [selectedWeek, setSelectedWeek] = useState("Week 1");

  const handleWeekChange = (event) => {
    setSelectedWeek(event.target.value);
  };

  return (
    <div className="main-content">
      <h1>Student Stats</h1>
      <div className="week-selector">
        <label htmlFor="week-select">Select Week:</label>
        <select
          id="week-select"
          value={selectedWeek}
          onChange={handleWeekChange}
        >
          {Object.keys(studentData).map((week) => (
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
              <th>Marks</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {studentData[selectedWeek].map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
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
