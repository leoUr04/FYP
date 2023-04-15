import React, { useState, useEffect } from 'react';
import './user.css';

const SellerTable = () => {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:80/api/seller.php');
      const data = await response.json();
      setUsers(data);
    };

    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, mobileNumber, password })
    };
    try {
      const response = await fetch('http://localhost:80/api/seller.php', requestOptions);
      const data = await response.json();
      console.log(data);
      setName('');
      setEmail('');
      setMobileNumber('');
      setPassword('');
      setShowForm(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="table-title">
        <h1>Seller Table</h1>
        <button onClick={() => setShowForm(true)}>Add Seller</button>
      </div>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>
            <input
              placeholder='Name'  
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label>
            <input
              placeholder='Email'
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            <input
              placeholder='Mobile Number'
              type="text"
              value={mobileNumber}
              onChange={(event) => setMobileNumber(event.target.value)}
            />
          </label>
          <label>
            <input
              placeholder='Password'
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobileNumber}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SellerTable;
