import React, { useState, useEffect } from "react";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:80/api/feedback.php")
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
      <h1>Feedbacks</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback) => (
            <tr key={feedback.id}>
              <td>{feedback.id}</td>
              <td>{feedback.name}</td>
              <td>{feedback.email}</td>
              <td>{feedback.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Feedback;


