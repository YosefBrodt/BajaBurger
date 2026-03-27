import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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

  // Determine Nav styling based on route and scroll state
  let navClass = 'navbar';
  let logoClass = 'nav-logo';
  let buttonClass = 'pill-btn pill-btn-ghost nav-cta-btn';
  let buttonText = 'Call Us';

  if (path === '/') {
    navClass += scrolled ? ' nav-solid-orange' : ' nav-transparent';
    logoClass += ' text-white';
  } else if (path === '/menu') {
    navClass += ' nav-solid-teal';
    logoClass += ' text-white';
  } else if (path === '/catering') {
    navClass += ' nav-solid-orange';
    logoClass += ' text-yellow'; // Or white, let's say white for consistency, prompt said "white or yellow depending on bg"
    buttonClass = 'pill-btn pill-btn-yellow nav-cta-btn';
    buttonText = 'Get a Quote';
  }

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Catering', path: '/catering' },
    { name: 'Locations', path: '/#locations' }
  ];

  return (
    <>
      <nav className={navClass}>
        <div className="nav-container">
          <Link to="/" className={logoClass}>
            BAJA BURGER SHACK
          </Link>
          
          <div className="nav-links">
            {links.map((link, idx) => (
              <a 
                key={idx} 
                href={link.path} 
                className={`nav-link ${path === link.path && link.path !== '/#locations' ? 'active' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="nav-right">
            <button className={buttonClass}>{buttonText}</button>
            <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''} bg-orange`}>
        {links.map((link, idx) => (
          <a 
            key={idx} 
            href={link.path} 
            className="mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <button className="pill-btn pill-btn-white" style={{marginTop: '2rem'}}>
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default Navbar;
