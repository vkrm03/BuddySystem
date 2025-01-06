import React from "react";
import "../../styles/Dashboard.css"

const Dash = () => {
  return (<>
  <div className="main-content">
          <h1>Admin Information</h1>
          <div className="details">
            <div className="detail-row">
              <div className="label">Name:</div>
              <div className="value">Alumini Name</div>
            </div>
            <div className="detail-row">
              <div className="label">Role:</div>
              <div className="value">Alumini</div>
            </div>
            <div className="detail-row">
              <div className="label">Email:</div>
              <div className="value">Admin@admin.com</div>
            </div>
            <div className="detail-row">
              <div className="label">Password:</div>
              <div className="value">Password</div>
            </div>
            <div className="detail-row">
              <div className="label">Gender:</div>
              <div className="value">Female</div>
            </div>
            <div className="detail-row">
              <div className="label">Mobile No:</div>
              <div className="value">+91 9840185872</div>
            </div>
            <div className="detail-row">
              <div className="label">Total Std Mentees:</div>
              <div className="value">0</div>
            </div>
            <div className="detail-row">
              <div className="label">Total Students:</div>
              <div className="value">30</div>
            </div>
          </div>
        </div>
  </>);
}

export default Dash;