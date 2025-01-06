import React, { useState } from "react";
import "../../styles/StdStats.css";

const StdStats = () => {
  const weeklyStats = [
    { week: 1, marks: 85, grade: "A", question: "What is React?", answer: "A JavaScript library for building UI" },
    { week: 2, marks: 78, grade: "B", question: "Explain JSX.", answer: "A syntax extension for JavaScript" },
    { week: 3, marks: 92, grade: "A+", question: "What is the virtual DOM?", answer: "A concept where React maintains an in-memory representation of the DOM" },
    { week: 4, marks: 88, grade: "A", question: "What is React Router?", answer: "A library for routing in React applications" },
    { week: 5, marks: 75, grade: "B", question: "What is state in React?", answer: "A JavaScript object that holds information about the component" },
  ];

  const [selectedWeek, setSelectedWeek] = useState(null);
  const handleOpenWeek = (weekStat) => {
    setSelectedWeek(weekStat);
  };

  return (
    <div className="main-content">
      <h1>My Statistics</h1>
      {!selectedWeek ? (
        <div className="table-container">
          <table className="stats-table">
            <thead>
              <tr>
                <th>Week</th>
                <th>Marks</th>
                <th>Grade</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {weeklyStats.map((weekStat, index) => (
                <tr key={index}>
                  <td>Week {weekStat.week}</td>
                  <td>{weekStat.marks}</td>
                  <td>{weekStat.grade}</td>
                  <td>
                    <button className="open-btn" onClick={() => handleOpenWeek(weekStat)}>
                      Open
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="week-details">
          <h2>Week {selectedWeek.week} Details</h2>
          <p><strong>Question:</strong> {selectedWeek.question}</p>
          <textarea
            className="answer-textarea"
            value={selectedWeek.answer}
            readOnly
            rows="5"
            cols="50"
          />

          <p><strong>Marks:</strong> {selectedWeek.marks}</p>
          <p><strong>Grade:</strong> {selectedWeek.grade}</p>

        </div>
      )}
    </div>
  );
};

export default StdStats;
