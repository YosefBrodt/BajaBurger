import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Marquee from '../components/Marquee';
import WaveDivider from '../components/WaveDivider';
import { ArrowRight } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, DIRECTIONS } from '../constants/contact';
import './Home.css';

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const marqueeItems = [
  'BAJA BURGER',
  'FISH TACOS',
  'FRESH CUT FRIES',
  'POUTINE',
  'COLD BEER',
  'BEACH VIBES',
  'FROZEN COCKTAILS',
  'HOT DOGS',
];

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#locations') {
      requestAnimationFrame(() => {
        document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, [location]);

  return (
    <div className="home-page">
      {/* 1. Hero Section — background video + brand overlay */}
      <section className="hero hero--video">
        <div className="hero-video-wrap" aria-hidden="true">
          <video
            className="hero-video"
            src={publicAsset('hero-beach.mp4')}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="hero-video-overlay" />
        </div>
        <div className="ghost-text">BAJA BURGER SHACK</div>
        <div className="hero-content">
          <div className="hero-badge">
            Three Ottawa Beach Locations · Open Daily
          </div>
          <h1 className="hero-h1 text-white">
            Ottawa's <br/> <span className="text-yellow">Best</span> <br/> Burger.
          </h1>
          <p className="hero-subline text-white">
            100% pure ground beef. Fresh cut fries. Cold beer at the beach.
          </p>
          <div className="hero-buttons">
            <Link to="/menu" className="pill-btn pill-btn-white hero-btn-main">See the Full Menu</Link>
            <a href="#locations" className="pill-btn pill-btn-ghost hero-btn-sec">Find a Location</a>
          </div>
        </div>
      </section>
      
      {/* Wave to Yellow Marquee */}
      <WaveDivider toColor="yellow" />

      {/* 2. Yellow Marquee */}
      <Marquee items={marqueeItems} color="yellow" speed="22s" />

      {/* 3. Food Showcase */}
      <section className="section bg-teal food-showcase">
        <div className="container">
          <h3 className="section-eyebrow text-white text-opacity-60">Fresh & Real</h3>
          <h2 className="section-title text-white">The Food <br /> Hits Different.</h2>

          <div className="food-grid">
            <div className="food-card card-1">
              <div className="food-img-wrapper">
                <img
                  src={publicAsset('showcase-baja-burger.png')}
                  alt="Baja Burger"
                  className="food-img"
                  onError={(e) => {
                    e.target.src =
                      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800';
                  }}
                />
              </div>
              <div className="food-card-overlay">
                <span className="food-name">Baja Burger</span>
                <span className="food-price">$11.95</span>
              </div>
            </div>

            <div className="food-card card-2">
              <div className="food-img-wrapper">
                <img
                  src={publicAsset('showcase-fish-tacos.png')}
                  alt="Fish Tacos"
                  className="food-img"
                  onError={(e) => {
                    e.target.src =
                      'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80&w=800';
                  }}
                />
              </div>
              <div className="food-card-overlay">
                <span className="food-name">Fish Tacos</span>
                <span className="food-price">$5.95</span>
              </div>
            </div>

            <div className="food-card card-3">
              <div className="food-img-wrapper">
                <img
                  src={publicAsset('showcase-poutine.png')}
                  alt="Poutine"
                  className="food-img"
                  onError={(e) => {
                    e.target.src =
                      'https://images.unsplash.com/photo-1588168333986-50882e382d54?auto=format&fit=crop&q=80&w=800';
                  }}
                />
              </div>
              <div className="food-card-overlay">
                <span className="food-name">Poutine</span>
                <span className="food-price">$11.95</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Menu Preview */}
      <section className="section bg-white menu-preview">
        <div className="container">
          <h3 className="section-eyebrow text-teal">Everything Good</h3>
          <h2 className="section-title text-orange">The Menu.</h2>
          
          <div className="menu-columns">
            <div className="menu-col">
              <h4 className="menu-cat-title">Burgers</h4>
              
              <div className="menu-item-row">
                <div className="menu-item-info">
                  <div className="menu-item-name">Baja Burger 1/3lb</div>
                  <div className="menu-item-desc">Lettuce, tomato, pickle, baja sauce</div>
                </div>
                <div className="menu-item-price text-teal">$11.95</div>
              </div>
              
              <div className="menu-item-row">
                <div className="menu-item-info">
                  <div className="menu-item-name">Jerk Burger</div>
                  <div className="menu-item-desc">Spicy jerk seasoning, slaw</div>
                </div>
                <div className="menu-item-price text-teal">$11.95</div>
              </div>

              <div className="menu-item-row">
                <div className="menu-item-info">
                  <div className="menu-item-name">Big Kahuna</div>
                  <div className="menu-item-desc">Double 2/3lb patty, double cheese</div>
                </div>
                <div className="menu-item-price text-teal">$18.50</div>
              </div>

              <div className="menu-item-row">
                <div className="menu-item-info">
                  <div className="menu-item-name">Baja Veggie</div>
                  <div className="menu-item-desc">Beyond Meat patty, baja sauce</div>
                </div>
                <div className="menu-item-price text-teal">$12.00</div>
              </div>

              <div className="menu-addons">
                <div className="addon-pill">Cheese <span className="addon-price">+$1.50</span></div>
                <div className="addon-pill">Bacon <span className="addon-price">+$1.50</span></div>
                <div className="addon-pill">Fried Egg <span className="addon-price">+$1.50</span></div>
                <div className="addon-pill">GF Bun <span className="addon-price">+$1.50</span></div>
              </div>
            </div>

            <div className="menu-col">
              <h4 className="menu-cat-title">Chicken</h4>
              <div className="menu-item-row">
                <div className="menu-item-info">
                  <div className="menu-item-name">Baja Chicken</div>
                  <div className="menu-item-desc">Southern crispy chicken</div>
                </div>
                <div className="menu-item-price text-teal">$9.50</div>
              </div>
              <div className="menu-item-row">
                <div className="menu-item-info">
                  <div className="menu-item-name">Tenders + Fries</div>
                  <div className="menu-item-desc">With plum sauce</div>
                </div>
                <div className="menu-item-price text-teal">$13.00</div>
              </div>

              <h4 className="menu-cat-title mt-8">Sides</h4>
              <div className="menu-item-row">
                <div className="menu-item-info">
                  <div className="menu-item-name">Fresh Cut Fries</div>
                </div>
                <div className="menu-item-price text-teal">$7.95</div>
              </div>
              <div className="menu-item-row">
                <div className="menu-item-info">
                  <div className="menu-item-name">Poutine</div>
                  <div className="menu-item-desc">Curds & gravy</div>
                </div>
                <div className="menu-item-price text-teal">$11.95</div>
              </div>
            </div>
          </div>
          
          <div className="menu-preview-cta">
            <Link to="/menu" className="pill-btn pill-btn-orange">
              Full Menu + Drinks <ArrowRight size={18} style={{marginLeft: '8px'}} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Orange Marquee */}
      <Marquee items={marqueeItems} color="orange" speed="28s" />

      {/* 6. Locations */}
      <section id="locations" className="section bg-offwhite locations-section">
        <div className="container">
          <h3 className="section-eyebrow text-orange text-opacity-50">Ottawa Beach Life</h3>
          <h2 className="section-title text-orange">Find Us at <br/> the Beach.</h2>

          <div className="location-grid">
            <div className="loc-card">
              <div className="loc-ghost-num">01</div>
              <h4 className="loc-name">Britannia Beach</h4>
              <p className="loc-address">102 Greenview Ave</p>
              <div className="loc-hours">
                <span className="loc-hours-label">Hours</span>
                <span className="loc-hours-value">Mon–Sun 11:30am–10:00pm</span>
              </div>
              <a
                href={DIRECTIONS.britannia}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn pill-btn-teal mt-auto"
              >
                Get Directions
              </a>
            </div>

            <div className="loc-card">
              <div className="loc-ghost-num">02</div>
              <h4 className="loc-name">Mooney's Bay</h4>
              <p className="loc-address">2960 Riverside Dr</p>
              <div className="loc-hours">
                <span className="loc-hours-label">Hours</span>
                <span className="loc-hours-value">Mon–Sun 11:30am–9:00pm</span>
              </div>
              <a
                href={DIRECTIONS.mooneys}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn pill-btn-teal mt-auto"
              >
                Get Directions
              </a>
            </div>

            <div className="loc-card">
              <div className="loc-ghost-num">03</div>
              <h4 className="loc-name">Petrie Island</h4>
              <p className="loc-address">795 Tweddle Rd Orléans</p>
              <div className="loc-hours">
                <span className="loc-hours-label">Hours</span>
                <span className="loc-hours-value">Mon–Sun 11:30am–9:00pm</span>
              </div>
              <a
                href={DIRECTIONS.petrie}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn pill-btn-teal mt-auto"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Catering CTA */}
      <section className="section bg-teal catering-cta">
        <div className="ghost-text">CATERING</div>
        <div className="container text-center relative z-10">
          <h3 className="section-eyebrow text-white text-opacity-55">Private Events</h3>
          <h2 className="section-title text-white">Bring the <br/> <span className="text-yellow">Shack</span> <br/> to You.</h2>
          <p className="catering-subline text-white text-opacity-75">
            Weddings, corporate events, and backyard parties.
          </p>
          
          <div className="catering-phone">
            <a href={PHONE_TEL} className="phone-number">
              {PHONE_DISPLAY}
            </a>
            <p className="phone-note">Special events & catering line</p>
          </div>

          <Link to="/catering" className="pill-btn pill-btn-yellow mt-8">
            See Catering Menu & Pricing <ArrowRight size={18} style={{marginLeft: '8px'}} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
