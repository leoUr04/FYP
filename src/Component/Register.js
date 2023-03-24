import React, { useState } from 'react';
import '../css/Register.css';
import { Link } from 'react-router-dom';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Mobile Number: ${mobileNumber}`);
    console.log(`Password: ${password}`);
    console.log(`Confirm Password: ${confirmPassword}`);
  };

  return (
    <div className="register-container">
      <h1 className="register-heading">Register</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <label className="register-label">
          <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="register-input" />
        </label>
        <br />
        <label className="register-label">
          <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="register-input" />
        </label>
        <br />
        <label className="register-label">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="register-input" />
        </label>
        <br />
        <label className="register-label">
          <input type="tel" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} className="register-input" />
        </label>
        <br />
        <label className="register-label">
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="register-input" />
        </label>
        <br />
        <label className="register-label">
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="register-input" />
        </label>
        <br />
        <button type="submit" className="register-button">Register</button>
        <p className="register-text">Already a Member?</p><Link to="/Login" className="register-link">Login</Link>
      </form>
    </div>
  );
}

export default Register;

