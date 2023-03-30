import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

const AdminDashboard = () => {
  const [propertiesCount, setPropertiesCount] = useState(0);
  const [tenantsCount, setTenantsCount] = useState(0);
  const [ownersCount, setOwnersCount] = useState(0);
  const [vacanciesCount, setVacanciesCount] = useState(0);
  const [rentalsCount, setRentalsCount] = useState(0);
  const [maintenanceRequestsCount, setMaintenanceRequestsCount] = useState(0);

  useEffect(() => {
    // Fetch data from database and update state accordingly
    const fetchCounts = async () => {
      const properties = await fetch('/api/properties');
      setPropertiesCount(properties.length);

      const tenants = await fetch('/api/tenants');
      setTenantsCount(tenants.length);

      const owners = await fetch('/api/owners');
      setOwnersCount(owners.length);

      const vacancies = await fetch('/api/vacancies');
      setVacanciesCount(vacancies.length);

      const rentals = await fetch('/api/rentals');
      setRentalsCount(rentals.length);

      const maintenanceRequests = await fetch('/api/maintenance-requests');
      setMaintenanceRequestsCount(maintenanceRequests.length);
    };

    fetchCounts();
  }, []);

  return (
    <div>
      <Sidebar />
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

export default AdminDashboard;
