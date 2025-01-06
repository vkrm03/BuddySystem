import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "../../styles/Home.css";
import "../../styles/Login.css";

const Login = () => { 
  const navigate = useNavigate();
  const [role, setRole] = useState("adm");
  const [credentials, setCredentials] = useState({
    emailOrReg: "",
    passordob: "",
  });

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setCredentials({ emailOrReg: "", passordob: "" });
  };

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the backend
      const response = await axios.post("http://localhost:5000/login", {
        role,
        emailOrReg: credentials.emailOrReg,
        passordob: credentials.passordob,
      });
      localStorage.setItem("role", role);
      console.log(localStorage.getItem("role"));
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.data.message,
      }).then(() => {
        if (role === "adm") {
          navigate("/admin-dashboard");
        } else if (role === "alu") {
          navigate("/alumini-dashboard");
        } else if (role === "std") {
          navigate("/std-dashboard");
        }
      })
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.message || "An error occurred!",
      });
    }
  };

  return (
    <div className="home">
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="select">
            <select name="roles" value={role} onChange={handleRoleChange}>
              <option value="adm">Admin</option>
              <option value="alu">Alumini</option>
              <option value="stdmnt">Student Mentee</option>
              <option value="std">Student</option>
            </select>
          </div>

          <div className="form-group">
            <input
              type={role === "std" ? "text" : "email"}
              id="emailOrReg"
              name="emailOrReg"
              placeholder={role === "std" ? "Register Number" : "Email"}
              value={credentials.emailOrReg}
              onChange={handleInputChange}
              required
            />
            <i className="fa-solid fa-id-badge"></i>
          </div>

          <div className="form-group">
            <input
              type="password"
              id="passordob"
              name="passordob"
              placeholder={role === "std" ? "Date of Birth (eg:12/04/2003)" : "Password"}
              value={credentials.passordob}
              onChange={handleInputChange}
              required
            />
            <i className="fa-solid fa-lock"></i>
          </div>

          <p><a href="#" className="forget">Forget Password</a></p>

          <button id="btn" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
