import React, { useState } from "react";
import "../../styles/Question.css";

const Question = () => {
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      const start = event.target.selectionStart;
      const end = event.target.selectionEnd;
      const newText = answer.substring(0, start) + "    " + answer.substring(end);
      setAnswer(newText);
      setTimeout(() => {
        event.target.selectionStart = event.target.selectionEnd = start + 4;
      }, 0);
    }
  };

  const handleSubmit = () => {
    console.log(answer);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="main-content">
      <div className="question-text">
        <h2>Week 1 Coding Question</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          dui et libero euismod faucibus. Ut sit amet consectetur turpis. Quisque
          scelerisque nisi at lectus fermentum, eget auctor libero dictum.
        </p>
      </div>

      <div className="answer-textarea-container">
        <textarea
          className="answer-textarea"
          value={answer}
          onChange={handleAnswerChange}
          onKeyDown={handleKeyDown}
          placeholder="Write your answer here...(You can use any lang and give indentation using tab)"
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
