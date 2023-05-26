import React, { useState } from 'react';
import './css/Login.css';
import { useNavigate } from 'react-router-dom';

function sellerlogin() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:80/api/sellerlogin.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });

      if (response.ok) {
        console.log('Login successful');
        navigate('/Dashboard');
      } else {
        setError('Invalid name or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Failed to login. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">seller Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label htmlFor="name" className="login-label">
          </label>
          <input
            type="name"
            placeholder="Email"
            id="name"
            value={name}
            onChange={handleNameChange}
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
    </div>
  );
}

export default sellerlogin;
