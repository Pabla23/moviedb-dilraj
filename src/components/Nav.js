// Nav
import { NavLink } from 'react-router-dom';

function Nav(props) {
    return (
      <nav className={`main-nav ${props.isOpen ? 'open' : ''}`}>
          <button className="nav-toggle" onClick={props.toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
          </button>
          <ul className="nav-menu">
              <li><NavLink to="/" activeClassName="active" onClick={props.closeMenu}>Home</NavLink></li>
              <li><NavLink to="/about" activeClassName="active" onClick={props.closeMenu}>About</NavLink></li>
              <li><NavLink to="/favourites" activeClassName="active" onClick={props.closeMenu}>Favourites</NavLink></li>
          </ul>
      </nav>
    );
  }

export default Nav;