import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-orange">
      <div className="footer-container">
        
        <div className="footer-col col-logo">
          <h2>BAJA BURGER SHACK</h2>
          <p>100% pure ground beef. Fresh cut fries. Cold beer at the beach.</p>
        </div>

        <div className="footer-col">
          <h3>Pages</h3>
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/catering">Catering</a>
          <a href="/#locations">Locations</a>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <p>hello@bajaburger.ca</p>
          <p>+1 (613) 769-8885</p>
          <p>Open Daily 11:30am</p>
        </div>

        <div className="footer-col border-none">
          <h3>Follow</h3>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">TikTok</a>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Baja Burger Shack. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
