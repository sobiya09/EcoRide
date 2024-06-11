import React from 'react'
import './About.css'
import aboutImg from '../Assets/about.png';

const About = () => {
  return (
    <>
     <section id="about">
        <h2 className="about-tit">About Us</h2>
        <div className="about-container">
          <p className="about-text">
            Welcome to EcoRide, your go-to platform for simplifying commuting and making it more enjoyable. At EcoRide, we believe that transportation should be convenient, cost-effective, and eco-friendly. That's why we've created a user-friendly web application that connects commuters who share similar routes and schedules, making carpooling easier than ever before.<br />
            Our mission is simple: to provide a convenient solution for daily travels or occasional trips, while also reducing transportation costs and environmental impact. By connecting users with compatible carpooling partners, we help you save money, reduce your carbon footprint, and enjoy a more social and eco-friendly commuting experience.<br />
            With EcoRide, finding a carpooling partner is effortless. Simply sign up, input your commute details, and let our platform match you with fellow commuters who share your route and schedule. Whether you're looking for a daily ride to work or an occasional trip across town, EcoRide has you covered.<br />
            Join us in our mission to create a greener, more sustainable future one ride at a time. Together, we can make commuting smarter, more efficient, and better for the planet.
          </p>
        </div>
        <img src={aboutImg} alt="aboutImage" className="about-img" />
      </section>
    </>
  )
}

export default About