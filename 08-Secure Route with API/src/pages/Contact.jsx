import React from "react";
import Navbar from "../Components/Navbar";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact">
        <section className="contact-intro">
          <h2>Contact Us</h2>
          <p>
            We'd love to hear from you! Fill out the form below or reach us
            directly via phone and email.
          </p>
        </section>

        <div className="contact-container">
          <div className="contact-form">
            <h3>Send a Message</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>📍 123 Main Street, New York, USA</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>📧 support@homerent.com</p>

            <div className="map">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.995230885845!2d-73.98565628459372!3d40.74881707932792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQ0JzU2LjMiTiA3M8KwNTknMTAuMyJX!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
