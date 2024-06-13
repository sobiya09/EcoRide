// src/components/LoginPopup.js
import React, { useState } from 'react';
import './Login.css';
import arrow from '../Assets/arrow.png'
import logo from '../Assets/weblogo.png';
import loginbg from '../Assets/loginbg.png';


const Login = ({ setShowLogin }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <div className='pop-imgs'>
        <img className='web-logo' src={logo} alt='logo'/>
        <button className="close-btn" onClick={() => setShowLogin(false)}><img src={arrow} alt='arrow' className='arrow'/>Home</button>


        </div>
        {isLogin ? (
          <div className='login-con'>
            {/* <h2>Login Form</h2>
           
            <button>Sign Up</button> */}
            
            <div className='leftside'>
                <img src={loginbg} alt='logBg' className='loginBg'/>


            </div>
            <div className='Rightside'>
            <h1 className="log-title">Login here</h1>
              <form className="log-form">
                <input type="text" className="form-control" placeholder="Enter username" />
                 <input type="password" className="form-control" placeholder="Enter password" />
                <span className='forgot'>Forget Your Password?</span><br/>
                 <button className='login-but'>SIGN IN</button><br/>
                 <span className='register-text'>Enter your personal details to use all of site features.<p>Don't you have an account?</p></span><br/>
                  <button className='log-but'  onClick={toggleForm}>SIGN UP</button>
                
               </form>


                
         </div>
          </div>
        ) : (
          <div >
             <h2>Login Form</h2>
           
           <button className='log-but'  onClick={toggleForm}>Login</button>
            
          </div>
          
        )}
      </div>
    </div>
  );
};

export default Login;
