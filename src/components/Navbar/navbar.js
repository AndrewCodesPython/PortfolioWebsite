import React, { useState } from 'react';
import logo from '../../assets/logoz.svg';
import './navbar.css';
import { Link } from 'react-router-dom';



function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    function handleMenuClick() {
        setIsMenuOpen(!isMenuOpen);
    }
    
    function handleLinkClick() {
        setIsMenuOpen(false);
    }
    


    return (
    <nav className="navbar">
        <div className="navbar__left">
            <button className="navbar__hamburger" onClick={handleMenuClick}>
            <span className="navbar__hamburger-icon"></span>
            <span className="navbar__hamburger-icon"></span>
            <span className="navbar__hamburger-icon"></span>
            </button>
            <div className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : 'navbar__links--closed'}`}>
            <Link to="/Projects" className="navbar__link" onClick={handleLinkClick}>Projects</Link>
            <a href="https://github.com/AndrewCodesPython" target="_blank" rel="noopener noreferrer" className="navbar__link">Github</a>
            <a href="https://www.linkedin.com/in/andrew-escudero-01709758/" target="_blank" rel="noopener noreferrer" className="navbar__link">Linked In</a>
            <a href="https://www.shopboundlesscreations.com" target="_blank" rel="noopener noreferrer" className="navbar__link">Artwork</a>
            </div>
        </div>
        <div className="navbar__container">
                <img src={logo} alt="Logo" className='navbar__logo'  />
            </div>
            
        </nav>
    );
}

export default Navbar;