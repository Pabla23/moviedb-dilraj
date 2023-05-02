// Header
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { ReactComponent as Logo } from '../svgs/dblogo.svg';
import { useState, useEffect } from 'react';

function Header () {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    const isDesktop = (e) => {
        if(e.matches){
            setIsOpen(false);
        }
    }

    useEffect(() => {
        let mediaQuery = window.matchMedia('(min-width: 700px)');
        mediaQuery.addEventListener('change', isDesktop);

        return () => mediaQuery.removeEventListener('change', isDesktop);
  }, []);

    return (
        <header>
            <div className='home-logo'>
                <Link to="/" onClick={closeMenu}>
                    <Logo/>
                </Link>
            </div>
            <Nav toggleMenu = {toggleMenu} closeMenu = {closeMenu} isOpen = {isOpen}/>
        </header>
    );
}

export default Header;