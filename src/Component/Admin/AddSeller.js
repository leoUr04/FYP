import { useState } from 'react';
import './css/addseller.css';

function AddSeller() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobilenumber, setMobilenumber] = useState('');
  const [password, setPassword] = useState('');


  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
}

function handleMobilenumberChange(event) {
  setMobilenumber(event.target.value);
}


  function handlePasswordChange(event) {
    setPassword(event.target.value);
}


  function handleSubmit(event) {
    event.preventDefault();

    // Create an object to represent the form data
    const formData = {
      name: name,
      email: email,
      mobilenumber: mobilenumber,
      password: password,
    };

    // Send a POST request to the backend server with the form data
    fetch('http://localhost:80/api/addseller.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (response.ok) {
          console.log('Form data submitted successfully');
          // Reset form fields
          setName('');
          setEmail('');
          setMobilenumber('');
          setPassword('');
        } else {
          console.error('Failed to submit form data');
        }
      })
      .catch(error => {
        console.error('Failed to submit form data', error);
      });
  }

  return (
    <div className="addseller-container">
      <h2 className="addseller-heading">Add Seller</h2>
      <form className="addseller-form" onSubmit={handleSubmit}>
        <label className="addseller-label">
          <input className="addseller-input" placeholder='name' type="text" value={name} onChange={handleNameChange} required/>
        </label>
        <label className="addseller-label">
          <input className="addseller-input" placeholder='email' type="text" value={email} onChange={handleEmailChange} required/>
        </label>
        <label className="addseller-label">
          <input className="addseller-input" placeholder='mobilenumber' type="text" value={mobilenumber} onChange={handleMobilenumberChange} required/>
        </label>
        <label className="addseller-label">
          <input className="addseller-input" placeholder='password' type="password" value={password} onChange={handlePasswordChange} required/>
        </label>
        <button className="addseller-btn" type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddSeller;