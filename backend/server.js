const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const thirdyr = require("./models/ThirdYr");
const thirdyrques = require("./models/ThirdYrQues");
const thirdyrans = require("./models/ThirdYrAns");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb+srv://vkrm:vkrm123@bds.m7nf3.mongodb.net/BuddySys", {
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

app.post("/submit-answer", async (req, res) => {
  const { week, que, ans, reg } = req.body;

  try {
    const existingAnswer = await thirdyrans.findOne({ week, reg });

    if (existingAnswer) {
      return res.status(400).json({
        success: false,
        message: "You have already submitted an answer for this week.",
      });
    }
    const newAnswer = new thirdyrans({ week, que, ans, reg, mark : "Not Corrected Yet", grade : "Not Corrected Yet" });
    await newAnswer.save();

    console.log("Answer submitted successfully:", newAnswer);
    res.status(200).json({ success: true, message: "Answer submitted successfully!" });
  } catch (error) {
    console.error("Error submitting answer:", error);
    res.status(500).json({ success: false, message: "Server error!" });
  }
});

app.get("/answers/:reg", async (req, res) => {
  const { reg } = req.params;

  try {
    const answers = await thirdyrans.find({ reg });
    if (answers.length > 0) {
      res.status(200).json(answers);
    } else {
      res.status(404).json({ success: false, message: "No answers found!" });
    }
  } catch (error) {
    console.error("Error fetching answers:", error);
    res.status(500).json({ success: false, message: "Server error!" });
  }
});

app.get("/all-answers", async (req, res) => {
  try {
    const answers = await thirdyrans.find();
    res.status(200).json(answers);
  } catch (error) {
    console.error("Error fetching all answers:", error);
    res.status(500).json({ success: false, message: "Server error!" });
  }
});

app.post("/update-grade-mark", async (req, res) => {
  const { reg, week, mark, grade } = req.body;

  try {
    const updatedAnswer = await thirdyrans.findOneAndUpdate(
      { reg, week },
      { mark, grade },
      { new: true }
    );

    if (updatedAnswer) {
      res.status(200).json({
        success: true,
        message: "Marks and grade updated successfully!",
        data: updatedAnswer,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Answer not found for the given week and register number.",
      });
    }
  } catch (error) {
    console.error("Error updating marks and grade:", error);
    res.status(500).json({ success: false, message: "Server error!" });
  }
});

app.get("/student-stats/:week", async (req, res) => {
  const { week } = req.params;

  try {
    const allStudents = await thirdyr.find();

    const answers = await thirdyrans.find({ week });

    const answerMap = answers.reduce((acc, answer) => {
      acc[answer.reg] = { mark: answer.mark, grade: answer.grade };
      return acc;
    }, {});

    const stats = allStudents.map((student) => ({
      name: student.name,
      reg: student.reg,
      marks: answerMap[student.reg]?.mark || "Not Submitted",
      grade: answerMap[student.reg]?.grade || "Not Submitted",
    }));

    res.status(200).json(stats);
  } catch (error) {
    console.error("Error fetching student stats:", error);
    res.status(500).json({ success: false, message: "Server error!" });
  }
});

app.get("/leaderboard/:week", async (req, res) => {
  const { week } = req.params;

  try {
    const allStudents = await thirdyr.find();

    const weekAnswers = await thirdyrans.find({ week });

    const answerMap = weekAnswers.reduce((acc, answer) => {
      acc[answer.reg] = {
        mark: answer.mark,
        grade: answer.grade,
      };
      return acc;
    }, {});

    const weekStats = allStudents.map((student) => {
      const answer = answerMap[student.reg];
      if (answer) {
        return {
          reg: student.reg,
          name: student.name,
          score: answer.mark === "Not Corrected Yet" ? "Not Corrected Yet" : answer.mark,
        };
      } else {
        return {
          reg: student.reg,
          name: student.name,
          score: "Not Submitted",
        };
      }
    });

    const sortedStats = weekStats.sort((a, b) => {
      if (a.score === "Not Submitted" && b.score !== "Not Submitted") return 1;
      if (b.score === "Not Submitted" && a.score !== "Not Submitted") return -1;
      return parseInt(b.score) - parseInt(a.score);
    });
    const rankedStats = sortedStats.map((entry, index) => ({
      rank: index + 1,
      name: entry.name,
      score: entry.score,
    }));
    res.status(200).json({ week, data: rankedStats });
  } catch (error) {
    console.error("Error generating leaderboard:", error);
    res.status(500).json({ success: false, message: "Server error!" });
  }
});










app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
