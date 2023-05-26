import React, { useState, useEffect } from "react";
import './css/VideoTour.css';

const VideoTour = () => {
  const [video, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:80/api/videotour.php")
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
        console.error("Error fetching video:", error);
      });
  };

  return (
    <div>
      <h1 className="table-title">Video Tour Requests</h1>
      <table className="video-table">
        <thead>
          <tr>
            <th className="video-table-header">ID</th>
            <th className="video-table-header">Name</th>
            <th className="video-table-header">Message</th>
            <th className="video-table-header">Email</th>
            <th className="video-table-header">Date</th>
            <th className="video-table-header">Time</th>
          </tr>
        </thead>
        <tbody>
          {video.map((video) => (
            <tr key={video.id} className="video-table-row">
              <td className="video-table-cell">{video.id}</td>
              <td className="video-table-cell">{video.name}</td>
              <td className="video-table-cell">{video.message}</td>
              <td className="video-table-cell">{video.email}</td>
              <td className="video-table-cell">{video.date}</td>
              <td className="video-table-cell">{video.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VideoTour;


