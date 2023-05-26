import React, { useState, useEffect } from 'react';
import './css/Dashboard.css';

const Dashboard = () => {
  const [listingsCount, setListingsCount] = useState(0);
  const [userbuyerCount, setUserbuyerCount] = useState(0);
  const [usersellerCount, setUsersellerCount] = useState(0);
  const [feedbacksCount, setfeedbacksCount] = useState(0);

  useEffect(() => {
    // Fetch data from database and update state accordingly
    const fetchCounts = async () => {
      const response = await fetch('http://localhost:80/api/counts.php');
      const data = await response.json();
  
      setListingsCount(data.listingsCount);
      setUserbuyerCount(data.userbuyerCount);
      setUsersellerCount(data.usersellerCount);
      setfeedbacksCount(data.feedbacksCount);
    };
  
    fetchCounts();
  }, []);
  

  return (
    <div>
      <main>
        <div className="dashboard-boxes">
          <div className="dashboard-box">
            <h2>Properties</h2>
            <p>{listingsCount}</p>
          </div>
          <div className="dashboard-box">
            <h2>Buyers</h2>
            <p>{userbuyerCount}</p>
          </div>
          <div className="dashboard-box">
            <h2>Sellers</h2>
            <p>{usersellerCount}</p>
          </div>
          <div className="dashboard-box">
            <h2>Feedbacks</h2>
            <p>{feedbacksCount}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
