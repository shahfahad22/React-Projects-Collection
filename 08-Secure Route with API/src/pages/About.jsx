import Navbar from "../Components/Navbar"
import "./About.css"

function About() {
  return (
    <>
      <Navbar />
        <div className="about">
      <section className="about-intro">
        <h2>About Us</h2>
        <p>
          Welcome to <span className="brand">HomeRent</span>, your trusted
          partner in finding the perfect rental property. We aim to make renting
          homes simple, transparent, and hassle-free.
        </p>
      </section>

      <section className="about-why">
        <h3>Why Choose Us?</h3>
        <div className="why-grid">
          <div className="why-card">
            <h4>🏠 Trusted Rentals</h4>
            <p>
              Verified properties and landlords so you can rent with confidence.
            </p>
          </div>
          <div className="why-card">
            <h4>💰 Affordable Prices</h4>
            <p>
              We provide budget-friendly options without compromising quality.
            </p>
          </div>
          <div className="why-card">
            <h4>⚡ Easy Booking</h4>
            <p>
              Fast and seamless booking process with just a few clicks.
            </p>
          </div>
        </div>
      </section>

      <section className="about-team">
        <h3>Meet Our Team</h3>
        <div className="team-grid">
          <div className="team-card">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="John"
            />
            <h4>John Doe</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="team-card">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sarah"
            />
            <h4>Sarah Smith</h4>
            <p>Property Manager</p>
          </div>
          <div className="team-card">
            <img
              src="https://randomuser.me/api/portraits/men/76.jpg"
              alt="David"
            />
            <h4>David Lee</h4>
            <p>Customer Support</p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default About;
