import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Have questions? Reach out to us and we'll get back to you soon!</p>
      </div>

      <div className="contact-form-container">
        <form className="contact-form">
          <label>Name</label>
          <input type="text" placeholder="Your Name" required />

          <label>Email</label>
          <input type="email" placeholder="Your Email" required />

          <label>Message</label>
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
       <footer className='footer'> <p>© 2025 Food Store. All rights reserved.</p></footer>
    </div>
    
  );
}

export default Contact;
