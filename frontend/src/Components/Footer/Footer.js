import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date();

  return (
    <footer className="footer">
      Copyright &#169; {year.getFullYear()} <span>ecoRide</span>. All rights reserved.
    </footer>
  );
};

export default Footer;
