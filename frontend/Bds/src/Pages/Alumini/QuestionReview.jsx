import React, { useState, useEffect } from "react";
import uri from "../../../public/Uri";
import "../../styles/QuestionReview.css";

const QuestionReview = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedWeek, setSelectedWeek] = useState(null);
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(uri + "/questions");
        const data = await response.json();
        setQuestions(data);
        if (data.length > 0) {
          setSelectedWeek(data[0]);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const handleWeekChange = (event) => {
    const selected = questions.find((q) => q.week === event.target.value);
    setSelectedWeek(selected);
  };

  return (
    <div className="main-content">
      <h1>Question Review</h1>
      <div className="week-selector">
        <label htmlFor="week-select">Select Week:</label>
        <select
          id="week-select"
          value={selectedWeek ? selectedWeek.week : ""}
          onChange={handleWeekChange}
        >
          {questions.map((week) => (
            <option key={week.week} value={week.week}>
              Week {week.week}
            </option>
          ))}
        </select>
      </div>

      {selectedWeek && (
        <div className="table-container">
          <table className="week-details-table">
            <thead>
              <tr>
                <th>Details</th>
                <th>Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Question</td>
                <td>{selectedWeek.que}</td>
              </tr>
              <tr>
                <td>Meeting Link</td>
                <td>
                  <a
                    href={selectedWeek.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selectedWeek.link}
                  </a>
                </td>
              </tr>
              <tr>
                <td>No of Std Done</td>
                <td>None</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default QuestionReview;
