import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [propertiesCount, setPropertiesCount] = useState(0);
  const [tenantsCount, setTenantsCount] = useState(0);
  const [ownersCount, setOwnersCount] = useState(0);
  const [vacanciesCount, setVacanciesCount] = useState(0);
  const [rentalsCount, setRentalsCount] = useState(0);
  const [maintenanceRequestsCount, setMaintenanceRequestsCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      const response = await fetch('http://localhost:80/api/counts.php');
      const data = await response.json();
  
      setPropertiesCount(data.propertiesCount);
      setTenantsCount(data.tenantsCount);
      setOwnersCount(data.ownersCount);
      setVacanciesCount(data.vacanciesCount);
      setRentalsCount(data.rentalsCount);
      setMaintenanceRequestsCount(data.maintenanceRequestsCount);
    };
  
    fetchCounts();
  }, []);
  

  return (
    <div>
      <main>
        <div className="dashboard-boxes">
          <div className="dashboard-box">
            <h2>Properties</h2>
            <p>{propertiesCount}</p>
          </div>
          <div className="dashboard-box">
            <h2>Tenants</h2>
            <p>{tenantsCount}</p>
          </div>
          <div className="dashboard-box">
            <h2>Owners</h2>
            <p>{ownersCount}</p>
          </div>
          <div className="dashboard-box">
            <h2>Vacancies</h2>
            <p>{vacanciesCount}</p>
          </div>
          <div className="dashboard-box">
            <h2>Rentals</h2>
            <p>{rentalsCount}</p>
          </div>
          <div className="dashboard-box">
            <h2>Maintenance Requests</h2>
            <p>{maintenanceRequestsCount}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
