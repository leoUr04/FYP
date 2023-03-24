import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="contact-us">
      <p className="contact-text">Have any questions or suggestions? Feel free to reach out to us!</p>
        <Link to="/contact" className="contact-btn">Contact Us</Link>
      </div>
      <p className="designed-by">@Designed by Utkarsh Rimal</p>
    </footer>
  );
}

export default Footer;

