import React, { useState } from 'react';
import './css/Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:80/api/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('Login successful');
        navigate('/Listings');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Failed to login. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label htmlFor="email" className="login-label">
          </label>
          <input
            type="text"
            placeholder="Email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="login-form-input"
          />
        </div>
        <div>
          <label htmlFor="password" className="login-label">
          </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="login-form-input"
          />
        </div>
        <button type="submit" className="login-form-button">
          Login
        </button>
      </form>
      <p className="error">{error}</p>
      <p className="login-link">
        New? <Link to="/register">Login</Link>
      </p>
    </div>
  );
}

export default Login;