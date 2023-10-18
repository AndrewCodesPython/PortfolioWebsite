import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';
import andrewlogo from '../../assets/andrewlogo.png';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Creativity Meets Focus</h1>
      <p><span className="box-shadow-text"> Application Development / Web Design / Art </span></p>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt='img'/>
    </div>
    
    <div className="andrew-logo-container">
      <img src={andrewlogo} alt='Andrew Logo' className='andrew-logo'/>
    </div>
  </div>
);

export default Header;