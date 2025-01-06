import React, { useState } from "react";
import "../../styles/AddMentee.css";

const AddMentee = () => {
    const [menteeData, setMenteeData] = useState({
        name: "",
        regNo: "",
        email: "",
        dob: "",
        year: "",
        class: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMenteeData({ ...menteeData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Mentee Data Submitted:", menteeData);
        // Add logic to send data to the server or perform other actions
    };

    return (
      <div className="main-content">
            <h1 className="form-title">Add Mentee</h1>
            <form onSubmit={handleSubmit} className="mentee-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={menteeData.name}
                        onChange={handleChange}
                        placeholder="Enter mentee's name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="regNo">Registration Number</label>
                    <input
                        type="text"
                        id="regNo"
                        name="regNo"
                        value={menteeData.regNo}
                        onChange={handleChange}
                        placeholder="Enter registration number"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={menteeData.email}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={menteeData.dob}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <select
                        id="year"
                        name="year"
                        value={menteeData.year}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Year</option>
                        <option value="First">First</option>
                        <option value="Second">Second</option>
                        <option value="Third">Third</option>
                        <option value="Fourth">Fourth</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="class">Class</label>
                    <select
                        id="class"
                        name="class"
                        value={menteeData.class}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Class</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={menteeData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        required
                    />
                </div>

                <button type="submit" className="submit-btn">Add Mentee</button>
            </form>
        </div>
    );
};

export default AddMentee;
