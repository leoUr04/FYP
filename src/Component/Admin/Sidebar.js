import React from 'react';

export const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h1>Real Estate Management System</h1>
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-menu-item">
          <a href="#">Dashboard</a>
        </li>
        <li className="sidebar-menu-item">
          <a href="#">Properties</a>
        </li>
        <li className="sidebar-menu-item">
          <a href="#">Tenants</a>
        </li>
        <li className="sidebar-menu-item">
          <a href="#">Owners</a>
        </li>
        <li className="sidebar-menu-item">
          <a href="#">Vacancies</a>
        </li>
        <li className="sidebar-menu-item">
          <a href="#">Rentals</a>
        </li>
        <li className="sidebar-menu-item">
          <a href="#">Maintenance Requests</a>
        </li>
      </ul>
    </nav>
  );
};
export default Sidebar