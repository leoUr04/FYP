import React, { useState, useEffect } from "react";
import axios from "axios";
import "./user.css";

const AdminTable = () => {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
      const response = await fetch("http://localhost:80/api/user-admin.php");
      const data = await response.json();
      setUsers(data);
    };

    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to the backend API
    axios
      .post("http://localhost:80/api/admin.php", { name, password })
      .then((response) => {
        console.log("Data stored successfully!");
        // Clear the form
        setName("");
        setPassword("");
        // Hide the form
        setShowForm(false);
      })
      .catch((error) => {
        console.log("Error occurred while storing data:", error);
      });
  };

  return (
    <div>
      <div className="table-title">
        <h1>Admin Table</h1>
        <button onClick={() => setShowForm(true)}>Add Admin</button>
      </div>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <form onSubmit={handleSubmit}>
            <label>
              <input
                placeholder="Name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required // Add required attribute here
              />
            </label>
            <label>
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required // Add required attribute here
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </form>
      )}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
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
