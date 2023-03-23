import React, { useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';

function Register() {
  const [FullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [MobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`FullName: ${FullName}`);
    console.log(`Email: ${email}`);
    console.log(`MobileNumber: ${MobileNumber}`);
    console.log(`Password: ${password}`);
    console.log(`Confirm Password: ${confirmPassword}`);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" value={FullName} onChange={(e) => setFullName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Mobile Number:
          <input type="tel" value={MobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Register</button>
        <p>Already a Member?</p><Link to="/Login">Login</Link>
      </form>
    </div>
  );
}

export default Register;
