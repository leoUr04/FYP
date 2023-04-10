import React, { useState, useEffect } from 'react';
// import Sidebar from './sidebar';
import './css/Listings.css';

function Listings() {
  const [pageNumber, setPageNumber] = useState(1); // Initialize the page number state with 1
  const [titles, setTitles] = useState([]); // Initialize the titles state with an empty array

  useEffect(() => {
    // Fetch titles from the real estate database and update the titles state
    const fetchTitles = async () => {
      try {
        const response = await fetch('http://localhost:80/api/listings.php'); // Replace with your API endpoint for fetching titles
        const data = await response.json();
        setTitles(data.titles || []); // Use empty array as fallback if titles are undefined in the API response
      } catch (error) {
        console.error('Error fetching titles:', error);
      }
    };
    fetchTitles();
  }, []); // Empty dependency array to run the effect only once, on component mount

  const handlePageUp = () => {
    setPageNumber(pageNumber + 1); // Increment the page number on page up button click
  }

  const handlePageDown = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1); // Decrement the page number on page down button click, minimum value is 1
    }
  }

  return (
    <div className="listings-container">
      {/* <Sidebar /> */}
      <div className="dashboard-boxes">
        {titles && titles.length > 0 ? (
          titles.slice(0, 4).map((title, index) => ( // Update to display only first 4 titles
            <div key={index} className="dashboard-box">
              {title} {/* Display the title inside the box */}
            </div>
          ))
        ) : (
          <div>No titles found</div> // Display a fallback message if titles are empty or undefined
        )}
      </div>
      <div className="page-number-bar">
        <button className="previous-button" onClick={handlePageDown}>&lt;</button>
        <span className="page-number">{pageNumber}</span> {/* Display the current page number */}
        <button className="next-button" onClick={handlePageUp}>&gt;</button>
      </div>
    </div>
  );
}

export default Listings;

