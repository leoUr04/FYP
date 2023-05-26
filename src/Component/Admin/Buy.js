import React, { useEffect, useState } from "react";
import "./css/user.css";

const Buy = () => {
  const [buyData, setBuyData] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    purpose: "",
    type: "",
    area: "",
    price: "",
    location: "",
  });
  const [showForm, setShowForm] = useState(false); // Added state to control form visibility

  useEffect(() => {
    fetchBuyData();
  }, []);

  const fetchBuyData = async () => {
    try {
      const response = await fetch("http://localhost:80/api/buy.php");
      const data = await response.json();
      setBuyData(data);
    } catch (error) {
      console.error("Error fetching buy data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:80/api/buyupdate.php`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Data updated successfully:", data);
      fetchBuyData();
    } catch (error) {
      console.error("Error updating buy data:", error);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:80/api/buydelete.php?deleteid=${id}`,
        { method: "DELETE" }
      );
      const data = await response.json();
      console.log("Data deleted successfully:", data);
      fetchBuyData();
    } catch (error) {
      console.error("Error deleting buy data:", error);
    }
  };

  const handleUpdateClick = (item) => {
    setFormData({
      id: item.id,
      title: item.title,
      purpose: item.purpose,
      type: item.type,
      area: item.area,
      price: item.price,
      location: item.location,
    });
    setShowForm(true); // Show form when update button is clicked
  };

  return (
    <div>
      <h1>Buy Page</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Purpose</th>
            <th>Type</th>
            <th>Area</th>
            <th>Price</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {buyData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.purpose}</td>
              <td>{item.type}</td>
              <td>{item.area}</td>
              <td>{item.price}</td>
              <td>{item.location}</td>
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
          <label htmlFor="name">Title</label>
          <input
            type="text"
            name="name"
            value={formData.title}
            onChange={handleInputChange}
          />
          <label htmlFor="name">Purpose</label>
          <input
            type="text"
            name="purpose"
            value={formData.purpose}
            onChange={handleInputChange}
          />
          <label htmlFor="type">Type</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
          />
          <label htmlFor="area">Area</label>
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleInputChange}
          />
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Buy;
