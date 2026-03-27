import React from 'react';
import { Link } from 'react-router-dom';
import { PHONE_TEL, EMAIL, SOCIAL } from '../constants/contact';
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
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/catering">Catering</Link>
          <Link to={{ pathname: '/', hash: 'locations' }}>Locations</Link>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={PHONE_TEL}>+1 (613) 769-8885</a>
          <p>Open Daily 11:30am</p>
        </div>

        <div className="footer-col border-none">
          <h3>Follow</h3>
          <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Baja Burger Shack. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
