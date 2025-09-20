import Navbar from "../Components/Navbar";
import "./Properties.css"
import StudioApartment from "../assets/Images/StudioApartment.jpg"
import CityLoft from "../assets/Images/CityLoft.jpg"
import BeachHouse from "../assets/Images/BeachHouse.jpg"


function Properties() {
  return (
    <>
      <Navbar />
        <div className="properties">
      <h2 className="title">Available Properties</h2>
      <div className="property-grid">

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
            alt="Modern Apartment"
          />
          <div className="card-body">
            <h3>Modern Apartment</h3>
            <p>📍 New York</p>
            <p className="price">💲1200 / month</p>
          </div>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c"
            alt="Cozy Family House"
          />
          <div className="card-body">
            <h3>Cozy Family House</h3>
            <p>📍 Los Angeles</p>
            <p className="price">💲1800 / month</p>
          </div>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Luxury Villa"
          />
          <div className="card-body">
            <h3>Luxury Villa</h3>
            <p>📍 Miami</p>
            <p className="price">💲2500 / month</p>
          </div>
        </div>

        <div className="card">
          <img
            src={StudioApartment}
            alt="Studio Apartment"
          />
          <div className="card-body">
            <h3>Studio Apartment</h3>
            <p>📍 Chicago</p>
            <p className="price">💲900 / month</p>
          </div>
        </div>

        <div className="card">
          <img
            src={BeachHouse}
            alt="Beach House"
          />
          <div className="card-body">
            <h3>Beach House</h3>
            <p>📍 California</p>
            <p className="price">💲3000 / month</p>
          </div>
        </div>

        <div className="card">
          <img
            src={CityLoft}
            alt="City Loft"
          />
          <div className="card-body">
            <h3>City Loft</h3>
            <p>📍 San Francisco</p>
            <p className="price">💲2200 / month</p>
          </div>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            alt="Country Cottage"
          />
          <div className="card-body">
            <h3>Country Cottage</h3>
            <p>📍 Texas</p>
            <p className="price">💲1100 / month</p>
          </div>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1523217582562-09d0def993a6"
            alt="Mountain Cabin"
          />
          <div className="card-body">
            <h3>Mountain Cabin</h3>
            <p>📍 Colorado</p>
            <p className="price">💲1500 / month</p>
          </div>
        </div>

      </div>
    </div>

    </>
  );
}

export default Properties;
