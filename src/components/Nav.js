// Nav
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }
    
    return (
      <nav className={`main-nav ${isOpen ? 'open' : ''}`}>
          <button className={`nav-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
          </button>
          <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
              <li><NavLink to="/" activeClassName="active" onClick={closeMenu}>Home</NavLink></li>
              <li><NavLink to="/about" activeClassName="active" onClick={closeMenu}>About</NavLink></li>
              <li><NavLink to="/favourites" activeClassName="active" onClick={closeMenu}>Favourites</NavLink></li>
          </ul>
      </nav>
    );
  }

export default Nav;