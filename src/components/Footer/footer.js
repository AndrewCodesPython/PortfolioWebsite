
import React from 'react';
import './footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Andrew Escudero</p>

        <div className="footer-links">
          <a href="https://www.shopboundlesscreations.com/" target="_blank" rel="noopener noreferrer" >Artwork</a>
          <a href="https://www.instagram.com/andrew_escudero_/" target="_blank" rel="noopener noreferrer" >Instagram</a>
          <a href="https://twitter.com/Drew_Dev_Artist" target="_blank" rel="noopener noreferrer" >X</a>
          <a href="https://www.facebook.com/YouAreBoundless/" target="_blank" rel="noopener noreferrer" >Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;