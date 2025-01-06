const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const { log } = require("console");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const { role, emailOrReg, passordob } = req.body;

  if (role == "adm" && emailOrReg == "admin@gmail.com" && passordob == "admin") {
    console.log("Login successful!");
    return res.status(200).json({ success: true, message: "Login successful!" });
  } else if (role == "alu" && emailOrReg == "alumini@gmail.com" && passordob == "alumini") {
    console.log("Login successful!");
    return res.status(200).json({ success: true, message: "Login successful!" });
  } else if (role == "std" && emailOrReg == "student@gmail.com" && passordob == "std") {
    console.log("Login successful!");
    return res.status(200).json({ success: true, message: "Login successful!" });
  } else {
    return res.status(401).json({ success: false, message: "Invalid credentials!" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
