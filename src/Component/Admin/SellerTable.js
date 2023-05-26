import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./css/user.css";

const SellerTable = () => {
  const [sellerData, setSellerData] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    mobilenumber: "",
    password: "",
  });
  const [showForm, setShowForm] = useState(false); // Added state to control form visibility

  useEffect(() => {
    fetchSellerData();
  }, []);

  const fetchSellerData = async () => {
    try {
      const response = await fetch("http://localhost:80/api/seller.php");
      const data = await response.json();
      setSellerData(data);
    } catch (error) {
      console.error("Error fetching seller data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:80/api/sellerupdate.php`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Data updated successfully:", data);
      fetchSellerData();
    } catch (error) {
      console.error("Error updating seller data:", error);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:80/api/sellerdelete.php?deleteid=${id}`,
        { method: "DELETE" }
      );
      const data = await response.json();
      console.log("Data deleted successfully:", data);
      fetchSellerData();
    } catch (error) {
      console.error("Error deleting seller data:", error);
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
    setShowForm(true); // Show form when update button is clicked
  };

  return (
    <div>
      <h1>Seller Table</h1>
      <Link to="/add-seller">
        <button>Add Seller</button>
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
          {sellerData.map((item) => (
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

      {/* Form for updating data */}
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

export default SellerTable;

