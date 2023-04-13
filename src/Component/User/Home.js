import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./css/Home.css"

function Home() {
  const [purpose, setPurpose] = useState("");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:80/api/Home.php?purpose=${purpose}&location=${location}&propertyType=${propertyType}`);
        const data = await response.json();
        navigate(`http://localhost:80/api/Home.php?purpose=${purpose}&location=${location}&propertyType=${propertyType}`, data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Find your next home</h1>
      <form className="home-form" onSubmit={handleSubmit}>
        <label className="home-label" htmlFor="property_purpose">
          Purpose:
        </label>
        <select id="property_purpose" name="property_purpose" value={purpose} onChange={(event) => setPurpose(event.target.value)}>
          <option value="">Select</option>
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
        </select>
        <label className="home-label" htmlFor="property_city">
          Location:
        </label>
        <select id="property_city" name="property_city" value={location} onChange={(event) => setLocation(event.target.value)}>
          <option value="">Select</option>
          <option value="Bhaktapur">Bhaktapur</option>
          <option value="Chitwan">Chitwan</option>
          <option value="Dhading">Dhading</option>
          <option value="Gorkha">Gorkha</option>
          <option value="Ilam">Ilam</option>
          <option value="Jajarkot">Jajarkot</option>
          <option value="Jhapa">Jhapa</option>
          <option value="Kapilvastu">Kapilvastu</option>
          <option value="Kaski">Kaski</option>
          <option value="Kathmandu">Kathmandu</option>
          <option value="Kavreplanchauk">Kavreplanchauk</option>
          <option value="Lalitpur">Lalitpur</option>
        </select>
        <label className="home-label" htmlFor="property_type">
          Property Type:
        </label>
        <select id="property_type" name="property_type" value={propertyType} onChange={(event) => setPropertyType(event.target.value)}>
          <option value="">Select</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="land">Land</option>
          <option value="shop">Shop</option>
        </select>
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default Home;




