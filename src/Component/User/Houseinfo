import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HouseInfo = ({ match }) => {
  // State to store the fetched house data
  const [house, setHouse] = useState(null);

  // Fetch house data from backend API based on the ID in the URL
  useEffect(() => {
    const fetchHouse = async () => {
      try {
        const response = await axios.get(`http://localhost/api/houseinfo.php?id=${match.params.id}`);
        setHouse(response.data);
      } catch (error) {
        console.error('Error fetching house:', error);
      }
    };
    fetchHouse();
  }, [match.params.id]);

  // Render loading state while house data is being fetched
  if (!house) {
    return <div>Loading...</div>;
  }

  // Render house information once data is fetched
  return (
    <div>
      <h2>{house.title}</h2>
      <p>{house.description}</p>
      {/* Render other house information */}
    </div>
  );
};

export default HouseInfo;

