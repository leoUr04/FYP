import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className='main'>
      <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/AboutUs">About Us</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        </div>
        <div className='login-register'>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Register">Register</Link>
        </li>
      </div>
    </nav>
  );
}

export default Navbar;
