const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const thirdyr = require("./models/ThirdYr");
const thirdyrques = require("./models/ThirdYrQues");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/BuddySys", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.post("/login", async(req, res) => {
  const { role, emailOrReg, passordob } = req.body;

  if (role == "adm" && emailOrReg == "admin@gmail.com" && passordob == "admin") {
    console.log("Login successful!");
    return res.status(200).json({ success: true, message: "amd" });
  } else if (role == "alu" && emailOrReg == "vishalij99@gmail.com" && passordob == "vishalini") {
    console.log("Login successful!");
    return res.status(200).json({ success: true, message: "alu" });
  } else if (role == "std") {
    std = await thirdyr.find({ reg: emailOrReg });
    
    if (std[0].reg == emailOrReg && std[0].dob == passordob) {
      console.log("Login successful!");
      return res.status(200).json({ success: true, message: "std" });
    } else {
      return res.status(401).json({ success: false, message: "Invalid credentials!" });
    } 
  } else {
    return res.status(401).json({ success: false, message: "Invalid credentials!" });
  }
});

app.get("/student/:reg", async (req, res) => {
  const { reg } = req.params;

  try {
    const student = await thirdyr.findOne({ reg });
    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({ success: false, message: "Student not found!" });
    }
  } catch (error) {
    console.error("Error fetching student details:", error);
    res.status(500).json({ success: false, message: "Server error!" });
  }
});

app.get("/get-current-week", async (req, res) => {
  try {
    const questionsCount = await thirdyrques.countDocuments()
    const currentWeek = questionsCount + 1;
    res.status(200).json({ week: currentWeek });
  } catch (error) {
    console.error("Error fetching current week:", error);
    res.status(500).json({ message: "Server error" });
  }
});


app.post("/submit-question", async (req, res) => {
  const { week, que, link } = req.body;
  try {
    const newQuestion = new thirdyrques({ week, que, link });
    await newQuestion.save();

    console.log("Question submitted successfully:", newQuestion);
    res.status(200).json({ success: true, message: "Question submitted successfully!" });
  } catch (error) {
    console.error("Error submitting question:", error);
    res.status(500).json({ success: false, message: "Server error!" });
  }
});

app.get("/questions", async (req, res) => {
  try {
    const questions = await thirdyrques.find();
    res.status(200).json(questions);
  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).json({ message: "Error fetching questions" });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
