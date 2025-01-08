import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import uri from "../../../public/Uri";
import "../../styles/Question.css";

const Question = () => {
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [latestQuestion, setLatestQuestion] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchLatestQuestion = async () => {
      try {
        const response = await fetch(uri + "/questions");
        const questions = await response.json();
        if (questions.length > 0) {
          setLatestQuestion(questions[questions.length - 1]);
        }
      } catch (error) {
        console.error("Error fetching the latest question:", error);
      } finally {
        setIsFetching(false);
      }
    };

    fetchLatestQuestion();
  }, []);

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

  const handleSubmit = async () => {
    if (!latestQuestion) return;

    setIsLoading(true);

    try {
      const response = await fetch(uri + "/submit-answer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reg: localStorage.getItem("reg"),
          week: latestQuestion.week,
          que: latestQuestion.que,
          ans: answer,
        }),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Answer submitted successfully:", result);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Answer posted successfully!",
        });
      } else {
        console.error("Error submitting answer:", result.message);
        Swal.fire({
          icon: "error",
          title: "Error While Submitting",
          text: result.message,
        });
      }
    } catch (error) {
      console.error("Error submitting answer:", error);
      Swal.fire({
        icon: "error",
        title: "Error While Submitting",
        text: result.message,
      });
    } finally {
      setIsLoading(false);
      setAnswer("")
    }
  };

  if (isFetching) {
    return <p>Loading question...</p>;
  }

  return (
    <div className="main-content">
      {latestQuestion ? (
        <>
          <div className="question-text">
            <h2>Week {latestQuestion.week} Coding Question</h2>
            <p>{latestQuestion.que}</p>
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
            <button
              className="submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </>
      ) : (
        <p>No questions available.</p>
      )}
    </div>
  );
};

export default Question;
