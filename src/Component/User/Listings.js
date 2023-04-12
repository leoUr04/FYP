import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './css/Listings.css';
import Sidebar from './sidebar';

const Listings = () => {
  // State to store the fetched data
  const [houses, setHouses] = useState([]);
  // State to keep track of current page
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch data from backend API on component mount
  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await axios.get('http://localhost/api/listings.php');
        setHouses(response.data);
      } catch (error) {
        console.error('Error fetching houses:', error);
      }
    };
    fetchHouses();
  }, []);

  // Function to handle next page button click
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Function to handle previous page button click
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  // Calculate starting index and ending index based on current page
  const startIndex = (currentPage - 1) * 4;
  const endIndex = startIndex + 4;

  return (
    <div className="listings-container">
      <Sidebar />
      <div className="house-grid">
        {houses.slice(startIndex, endIndex).map((house, index) => (
          <div key={index} className="house-card">
            <img src={house.image1} alt={house.title} className="house-image" />
            <h2 className="house-title">{house.title}</h2>
          </div>
        ))}
      </div>
      <div className="pagination">
        {currentPage > 1 && (
          <button
            className="pagination-button"
            onClick={handlePrevPage}
          >
            {'<'}
          </button>
        )}
        <span className="pagination-page">{currentPage}</span>
        {endIndex < houses.length && (
          <button
            className="pagination-button"
            onClick={handleNextPage}
          >
            {'>'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Listings;


