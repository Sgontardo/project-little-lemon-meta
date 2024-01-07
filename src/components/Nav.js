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
                <li><a href="/"></a>Home</li>
                <li><a href="/"></a>About</li>
                <li><a href="/"></a>Menu</li>
                <li><a href="/"></a>Reservations</li>
                <li><a href="/booking"></a>Orders Online</li>
                <li><a href="/"></a>Log In</li>
            </ul>

        </nav>
    )
}

export default Nav;