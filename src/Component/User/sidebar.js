import React, { useState } from "react";
import "./css/sidebar.css";

function Sidebar() {
  const [selectedCategory, setSelectedCategory] = useState(null); // State to keep track of selected category
  const [selectedLocation, setSelectedLocation] = useState("location"); // State to keep track of selected location
  const [selectedPrice, setSelectedPrice] = useState("Price"); // State to keep track of selected price

  // Function to handle category button click event
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Function to handle location select change event
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  // Function to handle price select change event
  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  // Function to handle clear filter button click event
  const handleClearFilterClick = () => {
    setSelectedCategory(null);
    setSelectedLocation("location");
    setSelectedPrice("Price");
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-title">
          <h2>Filter Your Search</h2>
          <button onClick={handleClearFilterClick}>Clear Filter</button>
        </div>
        <div className="sidebar-options">
          <h3>Categories</h3>
          <div className="category-buttons">
            <button
              className={selectedCategory === "Apartment" ? "selected" : ""}
              onClick={() => handleCategoryClick("Apartment")}
            >
              Apartment
            </button>
            <button
              className={selectedCategory === "House" ? "selected" : ""}
              onClick={() => handleCategoryClick("House")}
            >
              House
            </button>
            <button
              className={selectedCategory === "Land" ? "selected" : ""}
              onClick={() => handleCategoryClick("Land")}
            >
              Land
            </button>
            <button
              className={selectedCategory === "Shop" ? "selected" : ""}
              onClick={() => handleCategoryClick("Shop")}
            >
              Shop
            </button>
            <button
              className={selectedCategory === "Flat" ? "selected" : ""}
              onClick={() => handleCategoryClick("Flat")}
            >
              Flat
            </button>
          </div>
        </div>
        <div className="sidebar-options">
          <h3>Locations</h3>
          <select value={selectedLocation} onChange={handleLocationChange}>
            <option value="">Select</option>
            <option value="Achham">Achham</option>
            <option value="Arghakhanchi">Arghakhanchi</option>
            <option value="Baglung">Baglung</option>
            <option value="Baitadi">Baitadi</option>
            <option value="Bajhang">Bajhang</option>
            <option value="Bajura">Bajura</option>
            <option value="Banke">Banke</option>
            <option value="Bara">Bara</option>
            <option value="Bardiya">Bardiya</option>
            <option value="Bhaktapur">Bhaktapur</option>
            <option value="Bhojpur">Bhojpur</option>
            <option value="Chitwan">Chitwan</option>
            <option value="Dadeldhura">Dadeldhura</option>
            <option value="Dailekh">Dailekh</option>
            <option value="Dang">Dang</option>
            <option value="Darchula">Darchula</option>
            <option value="Dhanusa">Dhanusa</option>
            <option value="Dhankutta">Dhankutta</option>
            <option value="Dhading">Dhading</option>
            <option value="Dolakha">Dolakha</option>
            <option value="Dolpa">Dolpa</option>
            <option value="Doti">Doti</option>
            <option value="Gorkha">Gorkha</option>
            <option value="Gulmi">Gulmi</option>
            <option value="Humla">Humla</option>
            <option value="Ilam">Ilam</option>
            <option value="Jajarkot">Jajarkot</option>
            <option value="Jhapa">Jhapa</option>
            <option value="Jumla">Jumla</option>
            <option value="Kailali">Kailali</option>
            <option value="Kalikot">Kalikot</option>
            <option value="Kanchanpur">Kanchanpur</option>
            <option value="Kapilvastu">Kapilvastu</option>
            <option value="Kaski">Kaski</option>
            <option value="Kathmandu">Kathmandu</option>
            <option value="Kavreplanchauk">Kavreplanchauk</option>
            <option value="Khotang">Khotang</option>
            <option value="Lalitpur">Lalitpur</option>
            <option value="Lamjung">Lamjung</option>
            <option value="Mahottari">Mahottari</option>
            <option value="Makwanpur">Makwanpur</option>
            <option value="Manag">Manag</option>
            <option value="Morang">Morang</option>
            <option value="Mugu">Mugu</option>
            <option value="Mustang">Mustang</option>
            <option value="Myagdi">Myagdi</option>
            <option value="Nawalparasi">Nawalparasi</option>
            <option value="Nuwakot">Nuwakot</option>
            <option value="Okhaldunga">Okhaldunga</option>
            <option value="Palpa">Palpa</option>
            <option value="Panchthar">Panchthar</option>
            <option value="Parwat">Parwat</option>
            <option value="Parsa">Parsa</option>
            <option value="Pyuthan">Pyuthan</option>
            <option value="Ramechhap">Ramechhap</option>
            <option value="Rasuwa">Rasuwa</option>
          </select>
        </div>
        <div className="sidebar-options">
          <div className="price-range">
            <h3>Price Range</h3>
            <select value={selectedPrice} onChange={handlePriceChange}>
              <option value="Price">Select</option>
              <option value="10K">10K</option>
              <option value="50K">50K</option>
              <option value="100K">100K</option>
              <option value="500K">500K</option>
              <option value="1M">1M</option>
              <option value="3M+">3M+</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
