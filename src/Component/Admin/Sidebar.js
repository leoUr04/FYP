import React from 'react';
import './Sidebar.css';
import { useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();
  const isAdminPage = location.pathname === '/Admin';

  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h1>Real Estate Management System</h1>
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-menu-item">
          <a href="/Admin" className={isAdminPage ? 'active' : ''}>Dashboard</a>
        </li>
        <li className="sidebar-menu-item dropdown">
          <a>Properties</a>
          <ul className="menu">
            <li><a href="/Properties-Buy">Buy</a></li>
            <li><a href="/Properties-Sell">Sell</a></li>
          </ul>
        </li>
        <li className="sidebar-menu-item dropdown">
          <a>Users</a>
          <ul className="menu">
            <li><a href="/User-Admin">Admin</a></li>
            <li><a href="/User-Buyer">Buyers</a></li>
            <li><a href="/User-Seller">Sellers</a></li>
          </ul>
        </li>
        <li className="sidebar-menu-item">
          <a href="/Feedback">Feedback</a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;

