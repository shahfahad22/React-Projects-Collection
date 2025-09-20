import Navbar from "../Components/Navbar"
import "./Home.css"
import image from "../assets/Images/bg.jpg"
import ModernApartment from "../assets/Images/ModernApartment.jpg"
import LuxuryVilla from "../assets/Images/LuxuryVilla.jpg"
import FamilyApartment from "../assets/Images/FamilyApartment.jpg"

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-container">

        
        <section
          className="hero"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="hero-content">
            <h1>Find Your Perfect Rental Home 🏠</h1>
            <p>Search from thousands of properties across the country</p>
            <div className="search-bar">
              <input type="text" placeholder="Enter city..." />
              <input type="number" placeholder="Max Price (PKR)" />
              <select className="text-black">
                <option>1 Room</option>
                <option>2 Rooms</option>
                <option>3 Rooms</option>
                <option>4+ Rooms</option>
              </select>
              <button>Search</button>
            </div>
          </div>
        </section>

       
        <section className="featured">
          <h2>Featured Rentals</h2>
          <div className="cards">
            <div className="card">
              <img src={ModernApartment} alt="House" />
              <h3>Modern Apartment</h3>
              <p>Karachi • PKR 35,000/month</p>
              <button>View Details</button>
            </div>
            <div className="card">
              <img src={LuxuryVilla} alt="Villa" />
              <h3>Luxury Villa</h3>
              <p>Lahore • PKR 90,000/month</p>
              <button>View Details</button>
            </div>
            <div className="card">
              <img src={FamilyApartment} alt="Apartment" />
              <h3>Family Apartment</h3>
              <p>Islamabad • PKR 55,000/month</p>
              <button>View Details</button>
            </div>
          </div>
        </section>

       
        <section className="cta">
          <h2>Looking for more properties?</h2>
          <button>View All Properties</button>
        </section>
      </div>
    </>
  )
}

export default Home
