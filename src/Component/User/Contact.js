import { useState } from 'react';
import './css/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);

    // Email validation using regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(enteredEmail)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  }

  function handleSubjectChange(event) {
    setSubject(event.target.value);
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Create an object to represent the form data
    const formData = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };

    // Send a POST request to the backend server with the form data
    fetch('http://localhost:80/api/contact.php', {
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
          setSubject('');
          setMessage('');
          setEmailError('');
        } else {
          console.error('Failed to submit form data');
        }
      })
      .catch(error => {
        console.error('Failed to submit form data', error);
      });
  }

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="contact-label">
          <input className="contact-input" placeholder='Name' type="name" value={name} onChange={handleNameChange} required/>
        </label>
        <label className="contact-label">
          <input className="contact-input" placeholder='Email' type="email" value={email} onChange={handleEmailChange} required/>
          {emailError && <p className="error-msg">{emailError}</p>}
        </label>
        <label className="contact-label">
          <input className="contact-input" placeholder='Subject' type="subject" value={subject} onChange={handleSubjectChange} />
        </label>
        <label className="contact-label">
          <textarea className="contact-textarea" placeholder='Message' value={message} onChange={handleMessageChange} required/>
        </label>
        <button className="contact-btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;


