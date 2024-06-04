import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
import logo from '../Assets/weblogo.png'
import menu from '../Assets/navMenu.png'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <img src={logo} alt='logo' className='nav-img' />
        <div className='nav-menu'>
                 
                 <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className='nav-menu-item'>Home</Link>
                 <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500}className='nav-menu-item'> About</Link>   
                 <Link activeClass='active' to='services' spy={true} smooth={true} offset={-100} duration={500}className='nav-menu-item'> Services</Link>
                 <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='nav-menu-item' > Contact Us</Link> 


         </div>
         <button className='nav-button'><img src="" alt=''className='nav-but-img'/>Login | Register</button>
         <img src={menu} alt='menu' className='nav-menu-img'/>
         


    </div>
  )
}

export default Navbar