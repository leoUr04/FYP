import { useState } from 'react';
import './css/Addadmin.css';

function Addadmin() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
}


  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      name: name,
      password: password,
    };

    fetch('http://localhost:80/api/addadmin.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (response.ok) {
          console.log('Form data submitted successfully');
          setName('');
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
    <div className="addadmin-container">
      <h2 className="addadmin-heading">Add Admin</h2>
      <form className="addadmin-form" onSubmit={handleSubmit}>
        <label className="addadmin-label">
          <input className="addadmin-input" placeholder='name' type="text" value={name} onChange={handleNameChange} required/>
        </label>
        <label className="addadmin-label">
          <input className="addadmin-input" placeholder='password' type="text" value={password} onChange={handlePasswordChange} required/>
        </label>
        <button className="addadmin-btn" type="submit">Add</button>
      </form>
    </div>
  );
}

export default Addadmin;