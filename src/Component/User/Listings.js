import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/Listings.css';

const Listings = () => {
  const [houses, setHouses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const startIndex = (currentPage - 1) * 6;
  const endIndex = startIndex + 6;

  const handleHouseClick = (id) => {
    console.log(`House ID: ${id}`);
    axios
      .post(`http://localhost:80/api/listings.php?id=${id}`)
      .then((response) => {
        console.log('Response:', response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search Term:', searchTerm);

  };

  return (
    <div className="listings-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="house-grid">
        {houses
          .filter(
            (house) =>
              house.title?.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .slice(startIndex, endIndex)
          .map((house, index) => (
            <div key={index} className="house-card">
              <Link
                to={`/houseinfo/${house.id}`}
                className="house-card-content"
                onClick={() => handleHouseClick(house.id)}
              >
                <img src={house.image1} alt={house.title} className="house-image" />
                <h2 className="house-title">{house.title}</h2>
              </Link>
            </div>
          ))}
      </div>
      <div className="pagination">
        {currentPage > 1 && (
          <button className="pagination-button" onClick={handlePrevPage}>
            {'<'}
          </button>
        )}
        <span className="pagination-page">{currentPage}</span>
        {endIndex < houses.length && (
          <button className="pagination-button" onClick={handleNextPage}>
            {'>'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Listings;



