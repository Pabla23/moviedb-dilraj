// Header
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { ReactComponent as Logo } from '../svgs/dblogo.svg';
import { useState } from 'react';

function Header () {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <header>
            <h1>
                <Link to="/" onClick={closeMenu}>
                    <Logo/>
                </Link>
            </h1>
            <Nav toggleMenu = {toggleMenu} closeMenu = {closeMenu} isOpen = {isOpen}/>
        </header>
    );
}

export default Header;