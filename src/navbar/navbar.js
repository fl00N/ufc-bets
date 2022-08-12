import React from "react";
import "./navbar.css";
import "./adaptiveNavBar.css";
import logo from './ufcFreePass.png'

const Navbar = () => {

  return (

    <div className="Navbar">

      <img className="logo" src={logo} alt='logo' />

      <div>

        <button className='home' >ГЛАВНАЯ</button>
        <button className='news' >НОВОСТИ</button>
        <button className='live' >LIVE</button>
        
      </div>

    </div>

  );
};

export default Navbar;