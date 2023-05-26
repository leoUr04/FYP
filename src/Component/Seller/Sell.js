import { useState } from "react";
import "./css/Sell.css";

function Sell() {
  const [title, setTitle] = useState("");
  const [purpose, setPurpose] = useState("");
  const [type, setType] = useState("");
  const [area, setArea] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [floor, setFloor] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [kitchen, setKitchen] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [image6, setImage6] = useState("");
  const [availability, setAvailability] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handlePurposeChange(event) {
    setPurpose(event.target.value);
  }

  function handleTypeChange(event) {
    setType(event.target.value);
  }

  function handleAreaChange(event) {
    setArea(event.target.value);
  }

  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleFloorChange(event) {
    setFloor(event.target.value);
  }

  function handleBedroomChange(event) {
    setBedroom(event.target.value);
  }

  function handleBathroomChange(event) {
    setBathroom(event.target.value);
  }

  function handleKitchenChange(event) {
    setKitchen(event.target.value);
  }

  function handleImage1Change(event) {
    setImage1(event.target.value);
  }

  function handleImage2Change(event) {
    setImage2(event.target.value);
  }

  function handleImage3Change(event) {
    setImage3(event.target.value);
  }

  function handleImage4Change(event) {
    setImage4(event.target.value);
  }

  function handleImage5Change(event) {
    setImage5(event.target.value);
  }

  function handleImage6Change(event) {
    setImage6(event.target.value);
  }

  function handleAvailabilityChange(event) {
    setAvailability(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Create an object to represent the form data
    const formData = {
      title: title,
      purpose: purpose,
      type: type,
      area: area,
      price: price,
      location: location,
      floor: floor,
      bedroom: bedroom,
      bathroom: bathroom,
      kitchen: kitchen,
      image1: image1,
      image2: image2,
      image3: image3,
      image4: image4,
      image5: image5,
      image6: image6,
      availability: availability,
    };

    // Send a POST request to the backend server with the form data
    fetch("http://localhost:80/api/Sell.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Form data submitted successfully");
          // Reset form fields
          setTitle("");
          setPurpose("");
          setType("");
          setArea("");
          setPrice("");
          setLocation("");
          setFloor("");
          setBedroom("");
          setBathroom("");
          setKitchen("");
          setImage1("");
          setImage2("");
          setImage3("");
          setImage4("");
          setImage5("");
          setImage6("");
          setAvailability("");
        } else {
          console.error("Failed to submit form data");
        }
      })
      .catch((error) => {
        console.error("Failed to submit form data", error);
      });
  }

  return (
    <div className="Sell-container">
      <h2 className="Sell-heading">Sell Property</h2>
      <form className="Sell-form" onSubmit={handleSubmit}>
        <label className="Sell-label">
          <input
            className="Sell-input"
            placeholder="Name"
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </label>
        <label className="Sell-label">
          <input
            className="Sell-input"
            placeholder="Purpose"
            type="text"
            value={purpose}
            onChange={handlePurposeChange}
            required
          />
        </label>
        <label className="Sell-label">
          <input
            className="Sell-input"
            placeholder="Type"
            type="text"
            value={type}
            onChange={handleTypeChange}
          />
        </label>
        <label className="Sell-label">
          <input
            className="Sell-input"
            placeholder="Area"
            value={area}
            onChange={handleAreaChange}
            required
          />
        </label>
        <label className="Sell-label">
          <input
            className="Sell-input"
            placeholder="Price"
            type="text"
            value={price}
            onChange={handlePriceChange}
          />
        </label>
        <label className="Sell-label">
          <input
            className="Sell-input"
            placeholder="Location"
            type="text"
            value={location}
            onChange={handleLocationChange}
          />
        </label>
        <label className="Sell-label">
          <input
            className="Sell-input"
            placeholder="Floor"
            type="text"
            value={floor}
            onChange={handleFloorChange}
          />
        </label>
        <label className="Sell-label">
          <input
            className="Sell-input"
            placeholder="Bedrooms"
            type="text"
            value={bedroom}
            onChange={handleBedroomChange}
          />
        </label>
        <label className="Sell-label">
          <input
            className="Sell-input"
            placeholder="Bathrooms"
            type="text"
            value={bathroom}
            onChange={handleBathroomChange}
          />
        </label>
        <label className="Sell-label">
          <input
            className="Sell-input"
            placeholder="Kitchens"
            type="text"
            value={kitchen}
            onChange={handleKitchenChange}
          />
        </label>
        <label className="Sell-label">
          <input
            className="Sell-input"
            placeholder="Enter your 1st image scr link here"
            type="text"
            value={image1}
            onChange={handleImage1Change}
          />
        </label>
        <label className="Sell-label">
          <input
            className="Sell-input"
            placeholder="Enter your 2nd image scr link here"
            type="text"
            value={image2}
            onChange={handleImage2Change}
          />
        </label>
        <label className="Sell-label">
          <input
            className="Sell-input"
            placeholder="Enter your 3rd image scr link here"
            type="text"
            value={image3}
            onChange={handleImage3Change}
          />
        </label>
        <label className="Sell-label">
          <input
            className="Sell-input"
            placeholder="Enter your 4th image scr link here"
            type="text"
            value={image4}
            onChange={handleImage4Change}
          />
        </label>
        <label className="Sell-label">
          <input
            className="Sell-input"
            placeholder="Enter your 5th image scr link here"
            type="text"
            value={image5}
            onChange={handleImage5Change}
          />
        </label>
        <label className="Sell-label">
          <input
            className="Sell-input"
            placeholder="Enter your 6th image scr link here"
            type="text"
            value={image6}
            onChange={handleImage6Change}
          />
        </label>
        <label className="Sell-label">
          <input
            className="Sell-input"
            placeholder="Availability"
            type="text"
            value={availability}
            onChange={handleAvailabilityChange}
          />
        </label>
        <button className="Sell-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Sell;
