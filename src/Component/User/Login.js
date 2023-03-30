import React, { useState } from 'react';
import './css/Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${Email}`);
    console.log(`Password: ${password}`);
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label htmlFor="Email" className="login-label"></label>
          <input
            type="Email"
            placeholder='Email'
            id="Email"
            value={Email}
            onChange={handleUsernameChange}
            className="login-form-input"
          />
        </div>
        <div>
          <label htmlFor="password" className="login-label"></label>
          <input
            type="password"
            placeholder='Password'
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="login-form-input"
          />
        </div>
        <button type="submit" className="login-button">Login</button>
        <p className="login-text">New to?</p><Link to="/Register" className="login-link">Register</Link>
      </form>
    </div>
  );
}

export default Login;


