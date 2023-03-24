import { useState } from 'react';
import '../css/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setsubject] = useState('');
  const [message, setMessage] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleSubjectChange(event) {
    setsubject(event.target.value);
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Submitting contact form with name: ${name}, email: ${email}, and message: ${message}`);
    // TODO: Handle submitting form data to server here
    setName('');
    setEmail('');
    setsubject('');
    setMessage('');
  }

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="contact-label">
          <input className="contact-input" placeholder='Name' type="text" value={name} onChange={handleNameChange} />
        </label>
        <label className="contact-label">
          <input className="contact-input" placeholder='Email' type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label className="contact-label">
          <input className="contact-input" placeholder='Subject' type="subject" value={subject} onChange={handleSubjectChange} />
        </label>
        <label className="contact-label">
          <textarea className="contact-textarea" placeholder='Message' value={message} onChange={handleMessageChange} />
        </label>
        <button className="contact-btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;

