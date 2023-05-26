import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/user.css";

const AdminTable = () => {
  const [adminData, setAdminData] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    password: "",
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchAdminData();
  }, []);

  const fetchAdminData = async () => {
    try {
      const response = await fetch("http://localhost:80/api/admin.php");
      const data = await response.json();
      setAdminData(data);
    } catch (error) {
      console.error("Error fetching admin data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:80/api/adminupdate.php`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Data updated successfully:", data);
      fetchAdminData();
    } catch (error) {
      console.error("Error updating admin data:", error);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:80/api/admindelete.php?deleteid=${id}`,
        { method: "DELETE" }
      );
      const data = await response.json();
      console.log("Data deleted successfully:", data);
      fetchAdminData();
    } catch (error) {
      console.error("Error deleting admin data:", error);
    }
  };

  const handleUpdateClick = (item) => {
    setFormData({
      id: item.id,
      name: item.name,
      password: item.password,
    });
    setShowForm(true);
  };

  return (
    <div>
      <h1>Admin Table</h1>
      <Link to="/add-admin">
        <button>Add Admin</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {adminData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.password}</td>
              <td>
                <button onClick={() => handleUpdateClick(item)}>Update</button>
                <button onClick={() => handleDeleteClick(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <form onSubmit={handleFormSubmit}>
          <h2>Update Data</h2>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <label htmlFor="area">Password</label>
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default AdminTable;

