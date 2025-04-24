// import './Navbar.css'
import { Link,NavLink } from 'react-router-dom';
import './App.css'
import '../public/tent.svg'
const Navbar = () => {
    return (
      <nav className="navbar">
        <NavLink to="/"><span className='logonText' style={{display:"flex"}}><h1 className="logo">Eventify</h1><img width={"40px"} src="tent.svg" alt="" /></span></NavLink>
        <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/bookings">My Bookings</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  