// import './Navbar.css'
import './App.css'
const Navbar = ({ onNavigate }) => {
    return (
      <nav className="navbar">
        <h1 className="logo">Eventify</h1>
        <ul className="nav-links">
          <li><button onClick={() => onNavigate("home")}>Home</button></li>
          <li><button onClick={() => onNavigate("bookings")}>My Bookings</button></li>
          <li><button onClick={() => onNavigate("contact")}>Contact Us</button></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  