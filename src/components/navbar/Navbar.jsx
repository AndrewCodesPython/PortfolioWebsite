import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLin  }from  'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';


const Navbar = () => {


  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} />
        </div>
        <div className= 'gpt3__navbar-links_container'>
          
          <p><a href="#wgpt3">Projects</a></p>
          <p><a href="#possibility">Services</a></p>
          <p><a href="#features">GitHub</a></p>
          <p><a href="#blog">Bio</a></p>
        </div>
    </div>
    <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div> 
      



    </div>
  );
};

export default Navbar;