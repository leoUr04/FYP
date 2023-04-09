import React from 'react';
import "./css/Home.css"

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Find your next home</h1>
      <form className="home-form">
        <label className="home-label" htmlFor="property_purpose">
          Purpose:
        </label>
        <select id="property_type" name="property_type">
          <option value="">Select</option>
          <option value="house">Buy</option>
          <option value="apartment">Rent</option>
        </select>
        <label className="home-label" htmlFor="property_city">
          Location:
        </label>
        <select id="property_type" name="property_type">
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
        <label className="home-label" htmlFor="property_type">
          Property Type:
        </label>
        <select id="property_type" name="property_type">
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



