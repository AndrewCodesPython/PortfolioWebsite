import React, { useState } from 'react';
import logo from '../../assets/logoz.svg';
import './navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenuClick() {
        setIsMenuOpen(!isMenuOpen);
    }

    function handleLinkClick() {
        setIsMenuOpen(false);
    }
    function handleMouseLeave() {
        setIsMenuOpen(false);
    }


    return (
        <nav className="navbar"onMouseLeave={handleMouseLeave}>
            <div className="navbar__container">
                <img src={logo} alt="Logo" className='navbar__logo' />
            </div>
            <button className={`navbar__hamburger ${isMenuOpen ? 'navbar__hamburger--active' : ''}`} onClick={handleMenuClick}>
                <span className="navbar__hamburger-icon"></span>
                <span className="navbar__hamburger-icon"></span>
                <span className="navbar__hamburger-icon"></span>
            </button>
            <div className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : 'navbar__links--closed'}`}>
                <a href="#Services" className="navbar__link" onClick={handleLinkClick}>Services</a>
                <a href="https://www.shopboundlesscreations.com" target="_blank" rel="noopener noreferrer" className="navbar__link">Artwork</a>
                <a href="#Projects" className="navbar__link" onClick={handleLinkClick}>Developer Projects</a>
                <a href="https://www.shopboundlesscreations.com/contact" target="_blank" rel="noopener noreferrer" className="navbar__link" onClick={handleLinkClick}>Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;
