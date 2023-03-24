import React from 'react';
import "../css/Home.css"

function Home() {
  return (
    <div className="home-container">
      {/* //<h1 className='home_title'>Find Your Next Home</h1> */}
      <form className='home-form'>
      <label className='home-label' htmlFor="property_purpose">Purpose:</label>
        <select id="property_type" name="property_type">
          <option value="house">Buy</option>
          <option value="apartment">Rent</option>
        </select>
        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" placeholder="Enter city" />

        <label className='home-label' htmlFor="property_type">Property Type:</label>
        <select id="property_type" name="property_type">
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="land">Land</option>
          <option value="shop">Shop</option>
        </select>

        <label className='home-label' htmlFor="price_range">Price Range:</label>
        <input
          type="text"
          id="price_range"
          name="price_range"
          placeholder="Enter price range"
        />

        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default Home;

