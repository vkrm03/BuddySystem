import React, { useState, useEffect } from "react";
import axios from "axios";
import uri from "../../../public/Uri";
import Swal from "sweetalert2";
import "../../styles/Question.css";

const Question = () => {
  const [Question, setQuestion] = useState("");
  const [MeetingLink, setMeetingLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [week, setWeek] = useState(1);

  useEffect(() => {
    const fetchWeek = async () => {
      try {
        const response = await axios.get(`${uri}/get-current-week`);
        setWeek(response.data.week);
      } catch (error) {
        console.error("Error fetching current week:", error);
      }
    };

    fetchWeek();
  }, []);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleMeetingLinkChange = (event) => {
    setMeetingLink(event.target.value);
  };

  const handleSubmit = async () => {
    console.log("Submitting question:", Question, "Meeting link:", MeetingLink);
    setIsLoading(true);

    try {
      const response = await axios.post(uri + "/submit-question", {
        week: week,
        que: Question,
        link: MeetingLink,
      });

      console.log("Question submitted successfully:", response.data.message);
      setQuestion("");
      setMeetingLink("");

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Question posted successfully!",
      });

      setWeek(week + 1);
    } catch (error) {
      console.error(
        "Error submitting question:",
        error.response ? error.response.data.message : error.message
      );
      
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "There was an error posting the question. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="main-content">
      <div className="question-text">
        <h2>Week {week} Question :</h2>
      </div>

      <div className="answer-textarea-container">
        <label htmlFor="meetingLink" className="meeting-link-label">
          Meeting Link:
        </label>
        <input
          type="text"
          id="meetingLink"
          value={MeetingLink}
          onChange={handleMeetingLinkChange}
          placeholder="Enter meeting link"
          className="meeting-link-input"
        />
      </div>
      <div className="answer-textarea-container">
        <textarea
          className="answer-textarea"
          value={Question}
          onChange={handleQuestionChange}
          placeholder="Write your Question here..."
          rows="6"
        />
      </div>

      <div className="submit-btn-container">
        <button className="submit-btn" onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default Question;
