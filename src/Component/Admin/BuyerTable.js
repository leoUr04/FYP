import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/user.css";

const BuyerTable = () => {
  const [buyerData, setBuyerData] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    mobilenumber: "",
    password: "",
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchBuyerData();
  }, []);

  const fetchBuyerData = async () => {
    try {
      const response = await fetch("http://localhost:80/api/buyer.php");
      const data = await response.json();
      setBuyerData(data);
    } catch (error) {
      console.error("Error fetching buyer data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:80/api/buyerupdate.php`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Data updated successfully:", data);
      fetchBuyerData();
    } catch (error) {
      console.error("Error updating buyer data:", error);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:80/api/buyerdelete.php?deleteid=${id}`,
        { method: "DELETE" }
      );
      const data = await response.json();
      console.log("Data deleted successfully:", data);
      fetchBuyerData();
    } catch (error) {
      console.error("Error deleting buyer data:", error);
    }
  };

  const handleUpdateClick = (item) => {
    setFormData({
      id: item.id,
      name: item.name,
      email: item.email,
      mobilenumber: item.mobilenumber,
      password: item.password,
    });
    setShowForm(true);
  };

  return (
    <div>
      <h1>Buyer Table</h1>
      <Link to="/add-buyer">
        <button>Add Buyer</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {buyerData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobilenumber}</td>
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
          <label htmlFor="name">Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <label htmlFor="type">Mobile Number</label>
          <input
            type="text"
            name="mobilenumber"
            value={formData.mobilenumber}
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

export default BuyerTable;

