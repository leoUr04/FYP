import React, { useState, useEffect } from "react";
import './css/PropertyBuy.css';

const PropertyBuy = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:80/api/propertyBuy.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setFeedbacks(data);
      })
      .catch((error) => {
        console.error("Error fetching feedbacks:", error);
      });
  };

  return (
    <div>
      <h1 className="table-title">Property Buy Requests</h1>
      <table className="feedback-table">
        <thead>
          <tr>
            <th className="feedback-table-header">ID</th>
            <th className="feedback-table-header">Name</th>
            <th className="feedback-table-header">Message</th>
            <th className="feedback-table-header">Email</th>
            <th className="feedback-table-header">Date</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback) => (
            <tr key={feedback.id} className="feedback-table-row">
              <td className="feedback-table-cell">{feedback.id}</td>
              <td className="feedback-table-cell">{feedback.name}</td>
              <td className="feedback-table-cell">{feedback.message}</td>
              <td className="feedback-table-cell">{feedback.email}</td>
              <td className="feedback-table-cell">{feedback.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyBuy;

