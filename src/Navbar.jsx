// import './Navbar.css'
import { Link,NavLink } from 'react-router-dom';
import './App.css'
const Navbar = () => {
    return (
      <nav className="navbar">
        <h1 className="logo">Eventify</h1>
        <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/bookings">My Bookings</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  