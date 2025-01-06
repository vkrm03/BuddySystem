import React, { useState } from "react";
import "../../styles/QuestionReview.css";

const AnsReview = () => {
  const studentData = {
    "Week 1": [
      { name: "Aurn", question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
      { name: "Mahesh", question: "Explain React components.", answer: "React components are reusable building blocks of a React application." },
    ],
    "Week 2": [
      { name: "Aurn", question: "What is the Virtual DOM?", answer: "The Virtual DOM is a lightweight copy of the actual DOM, used by React to optimize rendering." },
      { name: "Mahesh", question: "Explain React state.", answer: "State is a JavaScript object that holds dynamic data for a React component." },
    ],
    "Week 3": [
      { name: "Aurn", question: "What are React Hooks?", answer: "React Hooks are functions that let you use state and other React features without writing a class." },
      { name: "Mahesh", question: "Explain useEffect.", answer: "useEffect is a hook that allows you to perform side effects in functional components." },
    ],
  };

  const [selectedWeek, setSelectedWeek] = useState("Week 1");
  const [openedWeek, setOpenedWeek] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleWeekChange = (event) => {
    setSelectedWeek(event.target.value);
  };

  const handleOpenWeek = (week, student) => {
    setOpenedWeek(week);
    setSelectedStudent(student);
  };

  return (
    <div className="main-content">
      <h1>Answer Review</h1>
      {!openedWeek ? (
        <div>
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {studentData[selectedWeek].map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>
                      <button
                        className="open-btn"
                        onClick={() => handleOpenWeek(selectedWeek, student)}
                      >
                        Open
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="week-details">
          <div className="details-header">
            <button
              className="back-button"
              onClick={() => {
                setOpenedWeek(null);
                setSelectedStudent(null);
              }}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <h2>
              {selectedStudent.name}'s {openedWeek} Details
            </h2>
          </div>
          <p>
            <strong>Question:</strong> {selectedStudent.question}
          </p>
          <textarea
            className="answer-textarea"
            value={selectedStudent.answer}
            readOnly
            rows="5"
            cols="50"
          />
          <p>
            <strong>Marks:</strong>{" "}
            <input
                type="text"
                placeholder="Enter marks"
                className="result"
            />
          </p>
          <p>
            <strong>Grade:</strong>{" "}
            <select name="grade" id="" className="result">
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>
          </p>
          <button className="open-btn mark-submit">Submit</button>
        </div>
      )}
    </div>
  );
};

export default AnsReview;
