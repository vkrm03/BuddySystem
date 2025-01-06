import React, { useState } from "react";
import "../../styles/Leaderboard.css"; 

const Leaderboard = () => {
  const leaderboardData = [
    {
      week: 1,
      data: [
        { rank: 1, name: "Name 1", score: 95 },
        { rank: 2, name: "Name 2", score: 90 },
        { rank: 3, name: "Name 3", score: 85 },
      ],
    },
    {
      week: 2,
      data: [
        { rank: 1, name: "Name 2", score: 98 },
        { rank: 2, name: "Name 1", score: 92 },
        { rank: 3, name: "Name 3", score: 85 },
      ],
    },
  ];

  const [selectedWeek, setSelectedWeek] = useState(1);
  const [currentLeaderboard, setCurrentLeaderboard] = useState(
    leaderboardData.find((week) => week.week === 1).data
  );

  const handleWeekChange = (weekNumber) => {
    setSelectedWeek(weekNumber);
    const weekData = leaderboardData.find((week) => week.week === weekNumber);
    setCurrentLeaderboard(weekData.data);
  };

  return (
    <div className="main-content">
        <h1>Leaderboard</h1>
      <div className="week-selector">
        <label htmlFor="week-select">Select Week: </label>
        <select
          id="week-select"
          value={selectedWeek}
          onChange={(e) => handleWeekChange(Number(e.target.value))}
        >
          {leaderboardData.map((week) => (
            <option key={week.week} value={week.week}>
              Week {week.week}
            </option>
          ))}
        </select>
      </div>

      <div className="table-container">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {currentLeaderboard.map((entry, index) => (
              <tr key={index}>
                <td>{entry.rank}</td>
                <td>{entry.name}</td>
                <td>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
