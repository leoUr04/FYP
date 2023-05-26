import { useState } from 'react';
import './css/addbuyer.css';

function AddBuyer() {
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
    fetch('http://localhost:80/api/addbuyer.php', {
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
    <div className="addbuyer-container">
      <h2 className="addbuyer-heading">Add Buyer</h2>
      <form className="addbuyer-form" onSubmit={handleSubmit}>
        <label className="addbuyer-label">
          <input className="addbuyer-input" placeholder='name' type="text" value={name} onChange={handleNameChange} required/>
        </label>
        <label className="addbuyer-label">
          <input className="addbuyer-input" placeholder='email' type="text" value={email} onChange={handleEmailChange} required/>
        </label>
        <label className="addbuyer-label">
          <input className="addbuyer-input" placeholder='mobilenumber' type="text" value={mobilenumber} onChange={handleMobilenumberChange} required/>
        </label>
        <label className="addbuyer-label">
          <input className="addbuyer-input" placeholder='password' type="password" value={password} onChange={handlePasswordChange} required/>
        </label>
        <button className="addbuyer-btn" type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddBuyer;