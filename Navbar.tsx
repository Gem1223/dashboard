// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const { isAuthenticated } = useAuth();
  const NavLinks = ({onClick}: {onClick: () => void}) => (
    <>
    <Link to={isAuthenticated ? "/authenticated-food" : "/food"} className="navbar-link" onClick={onClick}>
      Order Food
    </Link>

      <Link to="/about" className="navbar-link" onClick={onClick}>About</Link>
      <Link to="/contact" className="navbar-link" onClick={onClick}>Contact</Link>
      
    </>
  );

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">FOODIE</div>

        <div className="navbar-links">
          <NavLinks onClick={closeMenu}/>
        </div>

        <button 
          className="navbar-toggle" 
          onClick={toggleMenu} 
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="navbar-mobile-links">
          <NavLinks onClick={closeMenu} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
