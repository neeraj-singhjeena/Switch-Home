import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    // State to manage the visibility of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu's state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar-container">
            <a href="/" className="navbar-logo">
                SwitchHome
            </a>

            {/* Hamburger icon for mobile view */}
            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* Full menu for desktop and a mobile menu that's conditionally rendered */}
            <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                <li>
                    <a href="/home" onClick={toggleMenu}>Home</a>
                </li>
                <li>
                    <a href="/about" onClick={toggleMenu}>About Us</a>
                </li>
                <li>
                    <a href="/service" onClick={toggleMenu}>Service</a>
                </li>
                <li>
                    <a href="/contact" onClick={toggleMenu}>Contact us</a>
                </li>
                <li>
                    <button className="login-signup-btn">
                        Login/Signup
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;