import React from 'react'
import fb from '../Assets/facebook.png'
import insta from '../Assets/insta.png'
import twi from '../Assets/twitter.png'
import './Contact.css'

const Contact = () => {
  return (
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

    </>
  )
}

export default Contact