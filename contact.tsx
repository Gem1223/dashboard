import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Phone: 9813286224</p>
        <p>Email:Foodie@gmail.com</p>
        <p>Address:Panauti,5-Subbagaun</p>
        
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.123456789012!2d85.51234567890123!3d27.58123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1f3a5a5a5a5a%3A0x5a5a5a5a5a5a5a5a!2sPanauti%2C%20Nepal!5e0!3m2!1sen!2snp!4v1234567890123!5m2!1sen!2snp"
          width="200%"
          height="400"
          style={{border:0}}
          allowFullScreen
          loading="lazy"
          title="Location Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
