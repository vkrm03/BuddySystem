import React, { useState, useEffect } from "react";
import "../../styles/LeaderBoard.css";

const Leaderboard = () => {
  const [selectedWeek, setSelectedWeek] = useState(1); // Default week 1
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data for the selected week
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch(`http://localhost:5000/leaderboard/${selectedWeek}`);
        const data = await response.json();
        setLeaderboardData(data.data); // Set leaderboard data
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    fetchLeaderboard();
  }, [selectedWeek]); // Re-fetch when the selected week changes

  const handleWeekChange = (event) => {
    setSelectedWeek(Number(event.target.value)); // Update selected week
  };

  return (
    <div className="main-content">
      <h1>Leaderboard</h1>
      <div className="week-selector">
        <label htmlFor="week-select">Select Week: </label>
        <select
          id="week-select"
          value={selectedWeek}
          onChange={handleWeekChange}
        >
          <option value={1}>Week 1</option>
          <option value={2}>Week 2</option>
          {/* Add more weeks as needed */}
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
            {leaderboardData.map((entry) => (
              <tr key={entry.rank}>
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
