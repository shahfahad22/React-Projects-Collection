import { Link, useNavigate } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
    const navigate = useNavigate()
    const isLogout = () =>{
        localStorage.removeItem("user")
        navigate("/login")
    }

  return (
        <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">HomeRent</h1>

      
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/properties" className="nav-link">Properties</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <button onClick={isLogout} className="logout-btn">Log Out</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar