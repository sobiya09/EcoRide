import React from 'react'
import './Navbar.css'
import logo from '../Assets/weblogo.png';
import menu from '../Assets/navMenu.png';
import { Link } from 'react-scroll';
import header from '../Assets/header.png';



const Navbar = ({ setShowLogin }) => {
  return (
    <>
     <div className="navbar-container">
        <img src={logo} alt="logo" className="nav-img" />
        <div className="nav-menu">
          <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="nav-menu-item">Home</Link>
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500} className="nav-menu-item">About Us</Link>
          <Link activeClass="active" to="services" spy={true} smooth={true} offset={-100} duration={500} className="nav-menu-item">Our Services</Link>
          <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} className="nav-menu-item">Contact Us</Link>
        </div>
        <button className="nav-button" onClick={() => setShowLogin(true)} >
          Login | Register
        </button>
        <img src={menu} alt="menu" className="nav-menu-img" />
      </div>
      <div className="header-image">
        <img src={header} alt='headerimage' className='header-image'/>
      </div>
    </>
  )
}

export default Navbar