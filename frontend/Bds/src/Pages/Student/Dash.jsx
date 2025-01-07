import React, { useEffect, useState } from "react";
import uri from "../../../public/Uri";
import "../../styles/Dashboard.css";

const Dash = () => {
  // Initialize with default placeholders
  const [student, setStudent] = useState({
    name: "Loading...",
    reg: "Loading...",
    email: "Loading...",
    phone: "Loading...",
    year: "Loading...",
    mentor_name: "Loading...",
  });

  useEffect(() => {
    const fetchStudentDetails = async () => {
      const reg = localStorage.getItem("reg"); // Get reg from local storage
      if (reg) {
        try {
          const response = await fetch(`${uri}/student/${reg}`);
          const data = await response.json();
          if (response.ok) {
            setStudent(data); // Update with fetched data
          } else {
            console.error("Error fetching student details:", data.message);
          }
        } catch (error) {
          console.error("Error fetching student details:", error);
        }
      }
    };

    fetchStudentDetails();
  }, []);

  return (
    <div className="main-content">
      <h1>Student Information</h1>
      <div className="details">
        <div className="detail-row">
          <div className="label">Name:</div>
          <div className="value">{student.name}</div>
        </div>
        <div className="detail-row">
          <div className="label">Reg No:</div>
          <div className="value">{student.reg}</div>
        </div>
        <div className="detail-row">
          <div className="label">Email:</div>
          <div className="value">{student.email}</div>
        </div>
        <div className="detail-row">
          <div className="label">Mobile No:</div>
          <div className="value">{student.phone}</div>
        </div>
        <div className="detail-row">
          <div className="label">Year:</div>
          <div className="value">{student.year}</div>
        </div>
        <div className="detail-row">
          <div className="label">Mentor Name:</div>
          <div className="value">{student.mentor_name}</div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
