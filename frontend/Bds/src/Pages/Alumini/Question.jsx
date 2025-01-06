import React, { useState } from "react";
import "../../styles/Question.css";

const Question = () => {
  const [Question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = () => {
    console.log(Question);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="main-content">
      <div className="question-text">
        <h2>Week 1 Question :</h2>
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
