import React from 'react';
import { useState } from 'react';
import logo from '../images/Logo.jpg';

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className = {`navbar ${menuOpen ? "open" : ""}`}>
            <a href="/" className='logo'>
                <img src={logo} alt="logo"/>
            </a>
            <div className='menu-icon' onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <il><a href="/"></a>Home</il>
                <il><a href="/"></a>About</il>
                <il><a href="/"></a>Menu</il>
                <il><a href="/"></a>Reservations</il>
                <il><a href="/booking"></a>Orders Online</il>
                <il><a href="/"></a>Log In</il>
            </ul>

        </nav>
    )
}

export default Nav;