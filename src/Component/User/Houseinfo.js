import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router'

const HouseInfo = ({ match }) => {
  const [listings, setListings] = useState(null);
  const {id} = useParams(); // destructure the returned object to get only the "id" value

  useEffect(() => {
    // Fetch house data from API based on house ID
    const fetchListings = async () => {
      try {
        const response = await fetch(`http://localhost:80/api/houseinfo/${id}`);
        const data = await response.json();
        setListings(data);
      } catch (error) {
        console.error('Error fetching house:', error);
      }
    };
    fetchListings();
  }, [id]);

  if (!listings) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>House Information</h1>
      <ul>
        <li>Title: {listings.title}</li>
        <li>Location: {listings.location}</li>
        <li>Price: {listings.price}</li>
      </ul>
    </div>
  );
};

export default HouseInfo;


