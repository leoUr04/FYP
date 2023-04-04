import React from 'react';
import './css/sidebar.css';

function Buy() {
  return (
    <div className="buy-container">
      <div className="sidebar">
        <div className="sidebar-title">
          <h2>Filter Your Search</h2>
          <button>Clear Filter</button>
        </div>
        <div className="sidebar-options">
          <h3>Categories</h3>
          <div className="category-buttons">
            <button>Apartment</button>
            <button>House</button>
            <button>Land</button>
            <button>Shop</button>
            <button>Flat</button>
          </div>
        </div>
        <div className="sidebar-options">
          <h3>Locations</h3>
          <select>
            <option value="location">Select Location</option>
            <option value="kathmandu">Kathmandu</option>
            <option value="pokhara">Pokhara</option>
            <option value="chitwan">Chitwan</option>
            <option value="biratnagar">Biratnagar</option>
            <option value="nepalgunj">Nepalgunj</option>
            <option value="butwal">Butwal</option>
          </select>
        </div>
        <div className="sidebar-options">
          <div className="price-range">
            <h3>Price Range</h3>
            <input type="text" placeholder="Enter Min Price"/>
          </div>
          <div className="price-range">
            <input type="text" placeholder="Enter Max Price"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;


