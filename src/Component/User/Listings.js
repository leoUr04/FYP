import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios library for making HTTP requests
// import Sidebar from './sidebar';
import './css/Listings.css';

function Listings() {
  const [pageNumber, setPageNumber] = useState(1); // Initialize the page number state with 1
  const [listingData, setListingData] = useState([]); // Initialize state for listing data

  useEffect(() => {
    // Fetch listing data from backend API on component mount
    fetchListingData();
  }, []);

  const fetchListingData = () => {
    // Make HTTP request to fetch listing data from backend API
    axios.get('http://localhost:80/api/listings.php') // Replace with your backend API endpoint for fetching listing data
      .then(response => {
        // Update state with fetched listing data
        setListingData(response.data);
      })
      .catch(error => {
        console.error('Error fetching listing data:', error);
      });
  }

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
        {/* Render listing data in the first box */}
        {listingData.length > 0 && (
          <div className="dashboard-box">
            <img src={listingData[0].image} alt={listingData[0].title} />
            <h2>{listingData[0].title}</h2>
          </div>
        )}
        <div className="dashboard-box">
        </div>
        <div className="dashboard-box">
        </div>
        <div className="dashboard-box">
        </div>
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


