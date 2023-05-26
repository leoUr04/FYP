import React, { useState, useEffect } from 'react';
import './css/Dashboard.css';

const SellerDashboard = () => {
  const [propertyBuyCount, setpropertyBuyCount] = useState(0);
  const [videotourCount, setvideotourCount] = useState(0);

  useEffect(() => {
    // Fetch data from database and update state accordingly
    const fetchCounts = async () => {
      const response = await fetch('http://localhost:80/api/sellercount.php');
      const data = await response.json();
  
      setpropertyBuyCount(data.propertyBuyCount);
      setvideotourCount(data.videotourCount);
    };
  
    fetchCounts();
  }, []);
  

  return (
    <div>
      <main>
        <div className="dashboard-boxes">
          <div className="dashboard-box">
            <h2>Property Buy Requests</h2>
            <p>{propertyBuyCount}</p>
          </div>
          <div className="dashboard-box">
            <h2>Video Tour Requests</h2>
            <p>{videotourCount}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SellerDashboard;
