import React from "react";
import "../../styles/Dashboard.css"

const Dash = () => {
  return (<>
  <div className="main-content">
          <h1>Mentee Information</h1>
          <div className="details">
            <div className="detail-row">
              <div className="label">Name:</div>
              <div className="value">Student Mentee</div>
            </div>
            <div className="detail-row">
              <div className="label">Reg No:</div>
              <div className="value">4310</div>
            </div>
            <div className="detail-row">
              <div className="label">Email:</div>
              <div className="value">Student@gmail.com</div>
            </div>
            <div className="detail-row">
              <div className="label">Password:</div>
              <div className="value">Password</div>
            </div>
            <div className="detail-row">
              <div className="label">Gender:</div>
              <div className="value">male</div>
            </div>
            <div className="detail-row">
              <div className="label">Mobile No:</div>
              <div className="value">+91 9840185872</div>
            </div>
            <div className="detail-row">
              <div className="label">Year:</div>
              <div className="value">0</div>
            </div>
          </div>
        </div>
  </>);
}

export default Dash;