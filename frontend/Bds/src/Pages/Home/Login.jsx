import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import uri from "../../../public/Uri";
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
      const emailOrReg = credentials.emailOrReg;
      const response = await axios.post(uri + "/login", {
        role,
        emailOrReg: emailOrReg,
        passordob: credentials.passordob,
      });
      if (response.status === 200 && response.data.success === true) {
        localStorage.setItem("role", role);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Login Successful",
      }).then(() => {
        if (role === "adm") {
          navigate("/admin-dashboard");
        } else if (role === "alu") {
          navigate("/alumini-dashboard");
        } else if (role === "std") {
          localStorage.setItem("reg", emailOrReg);
          navigate("/std-dashboard");
        }
      })
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid Credentials",
        })
      }
      
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text:  "Invalid Credentials",
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
