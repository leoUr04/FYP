import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./css/Houseinfo.css";

const HouseInfo = ({ match }) => {
  const [listings, setListings] = useState(null);
  const [showVideoTourForm, setShowVideoTourForm] = useState(false);
  const [showBookForm, setShowBookForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const { id } = useParams(); // destructure the returned object to get only the "id" value

  useEffect(() => {
    // Fetch house data from API based on house ID
    const fetchListings = async () => {
      try {
        const response = await fetch(`http://localhost/api/houseinfo.php?id=${id}`);
        const data = await response.json();
        setListings(data);
      } catch (error) {
        console.error("Error fetching house:", error);
      }
    };
    fetchListings();
  }, [id]);

  const handleVideoTourClick = () => {
    setShowVideoTourForm(true);
  };

  const handleBookingClick = () => {
    setShowBookForm(true);
  };

  const handleSubmitVideoTourForm = (e) => {
    e.preventDefault();
    // Perform form submission logic with the form data
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("Date:", date);
    console.log("Time:", time);
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
    setDate("");
    setTime("");
  };

  const handleSubmitBookForm = (e) => {
    e.preventDefault();
    // Perform form submission logic with the form data
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  if (!listings) {
    return <div>Loading...</div>;
  }

  return (
    <div className="house-info-container">
      <div className="house-info-slider-container">
        <Carousel className="house-info-slider">
          <div>
            <img src={listings.image1}/>
          </div>
          <div>
            <img src={listings.image2} />
          </div>
          <div>
            <img src={listings.image3}/>
          </div>
          <div>
            <img src={listings.image4} />
          </div>
          <div>
            <img src={listings.image5}/>
          </div>
          <div>
            <img src={listings.image6}/>
          </div>
        </Carousel>
      </div>
      <h1 className="house-info-title">House Information</h1>
      <div className="house-info-details">
        <ul className="house-info-list">
          <li className="house-info-list-item">Title: {listings.title}</li>
          <li className="house-info-list-item">
            Location: {listings.location}
          </li>
          <li className="house-info-list-item">Price: {listings.price}</li>
          <li className="house-info-list-item">
            Bedrooms: {listings.bedroom}
          </li>
          <li className="house-info-list-item">
            Bathrooms: {listings.bathroom}
          </li>
          <li className="house-info-list-item">Area: {listings.area}</li>
          <li className="house-info-list-item">
            Availability: {listings.availability}
          </li>
        </ul>
      </div>
      <div className="house-info-form-container">
        <button
          className="house-info-form-button"
          onClick={handleVideoTourClick}
        >
          Request Video Tour
        </button>
        {showVideoTourForm && (
          <form
            className="house-info-form"
            onSubmit={handleSubmitVideoTourForm}
          >
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <input
              type="date"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="time"
              placeholder="Time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        )}
        <button className="house-info-form-button" onClick={handleBookingClick}>
          Book
        </button>
        {showBookForm && (
          <form className="house-info-form" onSubmit={handleSubmitBookForm}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default HouseInfo;
