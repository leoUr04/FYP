import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/Navbar.css';

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/Home';

  return (
    <nav>
      <div className='main'>
        <li className="sidebar-menu-item">
          <Link to="/Home" className={isHomePage ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link to="/Listings">Listings</Link>
        </li>
        <li>
          <Link to="/AboutUs">About Us</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Calculator">Calculator</Link>
        </li>
      </div>
      <div className='login-register'>
        <li>
          <Link to="/Loginmenu">Login/Register</Link>
        </li>
      </div>
    </nav>
  );
}

export default Navbar;
