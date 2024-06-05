import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'
import Contact from '../../components/Contact/Contact'
import logo from '../Assets/weblogo.png'
import menu from '../Assets/navMenu.png'
import aboutImg from '../Assets/about.png'
import {Link} from 'react-scroll'
import insta from '../Assets/insta.png'
import twi from '../Assets/twitter.png'
import fb from '../Assets/facebook.png'



const Home = () => {
  return (
    <>
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

    <section id='about'>
     <h2 className='about-tit'>About</h2>
     <div className='about-container'>
        <p className='about-text'>
        Welcome to EcoRide, your go-to platform for simplifying commuting and making it more enjoyable. At EcoRide, we believe that transportation should be convenient, cost-effective, and eco-friendly. That's why we've created a user-friendly web application that connects commuters who share similar routes and schedules, making carpooling easier than ever before.<br/>
Our mission is simple: to provide a convenient solution for daily travels or occasional trips, while also reducing transportation costs and environmental impact. By connecting users with compatible carpooling partners, we help you save money, reduce your carbon footprint, and enjoy a more social and eco-friendly commuting experience<br/>
With EcoRide, finding a carpooling partner is effortless. Simply sign up, input your commute details, and let our platform match you with fellow commuters who share your route and schedule. Whether you're looking for a daily ride to work or an occasional trip across town, EcoRide has you covered.<br/>
Join us in our mission to create a greener, more sustainable future one ride at a time. Together, we can make commuting smarter, more efficient, and better for the planet.

        </p>
     </div>
     <img src={aboutImg} alt='aboutImage' className='about-img' />



     </section>

     <>
        <section id='contactpage'>
        <div id='contact'>
            <h1 className='contact-tittle'>Contact us</h1>
            <p className='contact-para'>Please fill out the form....... </p>
            <form  className='contact-form'>
                <input type="text" className="name" placeholder='Your Name' name='user_name'/>
                <input type="email" className="email" placeholder='Your Email' name='user_email'/>  
                <textarea className='message' name='message' rows="5" placeholder='Your Message'/>
                <button className='sub-but' type='submit' value="sent">Sumbit</button>
                <div className='links'>  
                    <img className='link'src={fb} alt=''/>
                    <img className='link'src={insta} alt=''/> 
                    <img className='link'src={twi} alt=''/>
                  
                </div>

            </form>
             
          
        </div>
        </section>

        <footer className='footer'>
    Copyright &#169; 2024 <span> EcoRide</span>. All right received.
    </footer> 

    </>


    </>
  )
}

export default Home
