import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import uri from "../../../public/Uri";
import "../../styles/QuestionReview.css";

const AnsReview = () => {
  const [dataByWeeks, setDataByWeeks] = useState({});
  const [selectedWeek, setSelectedWeek] = useState("");
  const [openedWeek, setOpenedWeek] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const fetchAllAnswers = async () => {
    try {
      const response = await fetch(uri + "/all-answers");
      if (!response.ok) {
        throw new Error("Failed to fetch answers");
      }
      const answers = await response.json();

      const groupedData = answers.reduce((acc, answer) => {
        const week = `Week ${answer.week}`;
        if (!acc[week]) acc[week] = [];
        acc[week].push(answer);
        return acc;
      }, {});
      setDataByWeeks(groupedData);

      const firstWeek = Object.keys(groupedData)[0];
      setSelectedWeek(firstWeek);
    } catch (error) {
      console.error("Error fetching all answers:", error);
    }
  };

  useEffect(() => {
    fetchAllAnswers();
  }, []);

  const handleWeekChange = (event) => {
    setSelectedWeek(event.target.value);
  };

  const handleOpenWeek = (week, student) => {
    setOpenedWeek(week);
    setSelectedStudent(student);
  };


  const handleSubmitGradeAndMark = async () => {
    const updatedData = {
      reg: selectedStudent.reg,
      week: openedWeek.split(" ")[1],
      mark: document.querySelector(".result[type='text']").value,
      grade: document.querySelector(".result[name='grade']").value,
    };
  
    try {
      const response = await fetch(uri + "/update-grade-mark", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        Swal.fire({
                icon: "success",
                title: "Success",
                text: "Marks and Grade updated Successful",
              })
        fetchAllAnswers();
        setOpenedWeek(null);
        setSelectedStudent(null);
      } else {
        Swal.fire({
                icon: "error",
                title: "Failed",
                text: result.message,
              })
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error,
      })
    }
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
              {Object.keys(dataByWeeks).map((week) => (
                <option key={week} value={week}>
                  {week}
                </option>
              ))}
            </select>
          </div>

          {selectedWeek && (
            <div className="week-section">
              <table className="week-details-table">
                <thead>
                  <tr>
                    <th>Register Number</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {dataByWeeks[selectedWeek]?.map((student, index) => (
                    <tr key={index}>
                      <td>{student.reg}</td>
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
          )}
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
              {selectedStudent.reg}'s {openedWeek} Details
            </h2>
          </div>
          <p>
            <strong>Question:</strong> {selectedStudent.que}
          </p>
          <textarea
            className="answer-textarea"
            value={selectedStudent.ans}
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
            <select name="grade" className="result">
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="B+">B+</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </p>
          <button className="open-btn mark-submit" onClick={handleSubmitGradeAndMark}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default AnsReview;
