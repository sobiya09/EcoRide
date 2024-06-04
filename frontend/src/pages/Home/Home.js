import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'
import Contact from '../../components/Contact/Contact'

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
  )
}
