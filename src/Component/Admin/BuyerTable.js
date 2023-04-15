import React, { useState, useEffect } from 'react';
import './user.css';

const AdminTable = () => {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:80/api/admin.php');
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          setError('Error fetching data');
        }
      } catch (error) {
        setError('Error fetching data');
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !password) {
      setShowDialog(true);
      return;
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password })
    };
    try {
      const response = await fetch('http://localhost:80/api/admin.php', requestOptions);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setName('');
        setPassword('');
        setShowForm(false);
      } else {
        setError('Error submitting data');
      }
    } catch (error) {
      setError('Error submitting data');
    }
  };

  return (
    <div>
      <div className="table-title">
        <h1>Admin Table</h1>
        <button onClick={() => setShowForm(true)}>Add Admin</button>
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
              placeholder='Password'
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
      {error && <p>{error}</p>}
      {showDialog && (
        <div className="dialog">
          <p>Please fill up the form before submitting</p>
          <button onClick={() => setShowDialog(false)}>OK</button>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;

