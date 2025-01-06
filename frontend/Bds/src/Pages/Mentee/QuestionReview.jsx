import React, { useState } from "react";
import "../../styles/QuestionReview.css";

const QuestionReview = () => {
  const weekData = [
    {
      week: "Week 1",
      question: "What is React? Explain its features.",
      meetingLink: "https://example.com/week1-meeting",
    },
    {
      week: "Week 2",
      question: "Explain the Virtual DOM in React.",
      meetingLink: "https://example.com/week2-meeting",
    },
    {
      week: "Week 3",
      question: "What are React Hooks? Give examples.",
      meetingLink: "https://example.com/week3-meeting",
    },
  ];

  const [selectedWeek, setSelectedWeek] = useState(weekData[0]);

  const handleWeekChange = (event) => {
    const selected = weekData.find((w) => w.week === event.target.value);
    setSelectedWeek(selected);
  };

  return (
    <div className=" main-content">
      <div className="week-selector">
        <label htmlFor="week-select">Select Week:</label>
        <select
          id="week-select"
          value={selectedWeek.week}
          onChange={handleWeekChange}
        >
          {weekData.map((week) => (
            <option key={week.week} value={week.week}>
              {week.week}
            </option>
          ))}
        </select>
      </div>

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
              <td>{selectedWeek.question}</td>
            </tr>
            <tr>
              <td>Meeting Link</td>
              <td>
                <a
                  href={selectedWeek.meetingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selectedWeek.meetingLink}
                </a>
              </td>
            </tr>
            <tr>
              <td>No of Std Done</td>
              <td>3/15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuestionReview;
