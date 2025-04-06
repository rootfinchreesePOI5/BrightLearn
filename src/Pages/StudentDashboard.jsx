import React, { useState, useEffect } from "react";

const StudentDashboard = () => {
  const [points, setPoints] = useState(0);
  const [badges, setBadges] = useState([]);
  const [certificates, setCertificates] = useState(0);
  const [leaderboard, setLeaderboard] = useState([]);

  // Mock data (Replace with API or Firebase later)
  useEffect(() => {
    setPoints(120); // Example: Student has 120 points
    setBadges([
      { name: "Gold", score: 75, date: "2025-03-10" },
      { name: "Platinum", score: 95, date: "2025-02-28" },
    ]);
    setCertificates(3); // Example: Student has 3 certificates

    // Mock leaderboard
    setLeaderboard([
      { name: "John Doe", points: 150 },
      { name: "You", points: 120 },
      { name: "Jane Smith", points: 110 },
    ]);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold">Student Dashboard</h1>

      {/* Points & Badges Section */}
      <div className="bg-white p-4 rounded shadow mt-4">
        <h2 className="text-xl font-semibold">Your Progress</h2>
        <p>Points: <span className="font-bold">{points}</span></p>
        <p>Badges: {badges.length} 
          <button className="ml-2 text-blue-500" onClick={() => alert("Go to badges page")}>
            View Badges
          </button>
        </p>
      </div>

      {/* Leaderboard Section */}
      <div className="bg-white p-4 rounded shadow mt-4">
        <h2 className="text-xl font-semibold">Leaderboard</h2>
        <ul>
          {leaderboard.map((student, index) => (
            <li key={index} className="mt-1">
              {index + 1}. {student.name} - {student.points} points
            </li>
          ))}
        </ul>
      </div>

      {/* Certificates Section */}
      <div className="bg-white p-4 rounded shadow mt-4">
        <h2 className="text-xl font-semibold">Certifications</h2>
        <p>You have <span className="font-bold">{certificates}</span> certificates.</p>
        <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
          Take New Course
        </button>
      </div>
    </div>
  );
};

export default StudentDashboard;
