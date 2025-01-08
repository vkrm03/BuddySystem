import React, { useState, useEffect } from "react";
import uri from "../../../public/Uri";
import "../../styles/StdStats.css";

const StdStats = ({ reg }) => {
  const [answers, setAnswers] = useState([]);
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const response = await fetch(uri + `/answers/${localStorage.getItem('reg')}`);
        const data = await response.json();

        if (response.ok) {
          setAnswers(data);
        } else {
          setError(data.message || "Error fetching answers");
        }
      } catch (err) {
        setError("Unable to fetch answers. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnswers();
  }, [reg]);

  const handleOpenWeek = (weekStat) => {
    setSelectedWeek(weekStat);
  };

  return (
    <div className="main-content">
      <h1>My Statistics</h1>

      {isLoading ? (
        <p>Loading answers...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : !selectedWeek ? (
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
              {answers.map((answer, index) => (
                <tr key={index}>
                  <td>Week {answer.week}</td>
                  <td>{answer.mark}</td>
                  <td>{answer.grade}</td>
                  <td>
                    <button className="open-btn" onClick={() => handleOpenWeek(answer)}>
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
          <p><strong>Question:</strong> {selectedWeek.que}</p>
          <textarea
            className="answer-textarea"
            value={selectedWeek.ans}
            readOnly
            rows="5"
            cols="50"
          />
          <p><strong>Marks:</strong> {selectedWeek.mark}</p>
          <p><strong>Grade:</strong> {selectedWeek.grade}</p>
          <button className="back-btn" onClick={() => setSelectedWeek(null)}>Back</button>
        </div>
      )}
    </div>
  );
};

export default StdStats;
