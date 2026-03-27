import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { PHONE_TEL, MAILTO_CATERING } from '../constants/contact';
import { LOGO_SRC } from '../constants/branding';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let navClass = 'navbar';
  let buttonClass = 'pill-btn pill-btn-ghost nav-cta-btn';
  let buttonText = 'Call Us';
  let ctaHref = PHONE_TEL;

  if (path === '/') {
    navClass += scrolled ? ' nav-solid-orange' : ' nav-transparent';
  } else if (path === '/menu') {
    navClass += ' nav-solid-teal';
  } else if (path === '/catering') {
    navClass += ' nav-solid-orange';
    buttonClass = 'pill-btn pill-btn-yellow nav-cta-btn';
    buttonText = 'Get a Quote';
    ctaHref = MAILTO_CATERING;
  }

  const links = [
    { name: 'Home', to: '/' },
    { name: 'Menu', to: '/menu' },
    { name: 'Catering', to: '/catering' },
    { name: 'Locations', to: { pathname: '/', hash: 'locations' } },
  ];

  const isNavActive = (to) => {
    if (typeof to === 'object' && to.hash === 'locations') {
      return path === '/' && location.hash === '#locations';
    }
    return path === to;
  };

  return (
    <>
      <nav className={navClass} aria-label="Main">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <img
              src={LOGO_SRC}
              alt="Baja Burger Shack"
              className="nav-logo-img"
              width={200}
              height={56}
              decoding="async"
            />
          </Link>

          <div className="nav-links">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`nav-link ${isNavActive(link.to) ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="nav-right">
            <a href={ctaHref} className={buttonClass}>
              {buttonText}
            </a>
            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`mobile-menu ${mobileOpen ? 'open' : ''} bg-orange`}
        aria-hidden={!mobileOpen}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            className="mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <a href={ctaHref} className="pill-btn pill-btn-white" style={{ marginTop: '2rem' }}>
          {buttonText}
        </a>
      </div>
    </>
  );
};

export default Navbar;
