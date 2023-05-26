import React from 'react';
import './css/Sidebar.css';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();
  const isSellerPage = location.pathname === '/Seller';

  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h1>Real Estate Management System</h1>
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-menu-item">
          <Link to="/Seller" className={isSellerPage ? 'active' : ''}>Dashboard</Link>
        </li>
        <li className="sidebar-menu-item dropdown">
          <a>Properties</a>
          <ul className="menu">
            <li><Link to="/Sell">Sell</Link></li>
          </ul>
        </li>
        <li className="sidebar-menu-item">
          <Link to="/PropertyBuy">Property Buy Request</Link>
        </li>
        <li className="sidebar-menu-item">
          <Link to="/VideoTour">Video Tour Request</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;


