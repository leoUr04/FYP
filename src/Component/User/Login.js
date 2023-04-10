import React, { useState } from 'react';
import './css/Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make an API call to your backend service or database to validate the email and password
      const response = await fetch('http://localhost/api/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // Handle the response and perform appropriate actions
      if (response.ok) {
        // If response is successful, perform login action
        // e.g. redirect to dashboard or set authentication state
        console.log('Login successful');
      } else {
        // If response is not successful, display error message
        setError('Invalid email or password');
      }
    } catch (error) {
      // Handle any errors that may occur during the API call
      console.error('Login error:', error);
      setError('Failed to login. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label htmlFor="email" className="login-label"></label>
          <input
            type="email"
            placeholder='Email'
            id="email"
            value={email}
            onChange={handleEmailChange}
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
        {error && <p className="login-error">{error}</p>}
        <p className="login-text">New to?</p><Link to="/Register" className="login-link">Register</Link>
      </form>
    </div>
  );
}

export default Login;
