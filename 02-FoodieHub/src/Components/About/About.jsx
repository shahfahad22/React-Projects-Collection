import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">

      <div className="about-hero">
        <h1>About Us</h1>
        <p>
          Welcome to our Food Store! We offer the best quality products for
          every taste. Our mission is to bring fresh and delicious food to your
          table.
        </p>
      </div>

      <div className="about-content">
        <h2>Our Story</h2>
        <p>
          Our journey started with a passion for food and a dream to make it
          accessible for everyone. We carefully select every ingredient to
          ensure freshness and taste.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>Fresh and quality products</li>
          <li>Fast and reliable delivery</li>
          <li>Customer satisfaction guaranteed</li>
          <li>Wide range of food items</li>
        </ul>
      </div>
       <footer className='footer'> <p>© 2025 Food Store. All rights reserved.</p></footer>
    </div>
  );
}

export default About;
