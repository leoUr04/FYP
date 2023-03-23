import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
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
    setMessage('');
  }

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Message:
          <textarea value={message} onChange={handleMessageChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
