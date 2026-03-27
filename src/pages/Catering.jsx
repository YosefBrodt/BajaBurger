import React from 'react';
import WaveDivider from '../components/WaveDivider';
import Marquee from '../components/Marquee';
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  MAILTO_CATERING,
  MAILTO_BOOK_CLASSIC,
} from '../constants/contact';
import './Catering.css';

const marqueeItems = [
  'HOUSE GROUND BURGERS', 
  'BBQ PULLED PORK', 
  'GOURMET SAUSAGE', 
  'GRILLED TACOS', 
  'BBQ CHICKEN BREAST', 
  'CAESAR SALAD', 
  'SETUP & DELIVERY INCLUDED'
];

const Catering = () => {
  return (
    <div className="catering-page bg-offwhite">
      {/* 1. Hero */}
      <section className="catering-hero bg-orange">
        <div className="container relative z-10 hero-contents-c">
          <div className="hero-badge">Private Events & Group Catering</div>
          <h1 className="hero-h1 text-white m-0 catering-hero-title">
            Bring the <br /> <span className="text-yellow">Shack</span> <br /> to You.
          </h1>
          
          <div className="catering-hero-bottom">
            <p className="hero-subline text-white">We bring the beach vibes and the best burgers in Ottawa right to your backyard, office, or venue.</p>
            <a href={MAILTO_CATERING} className="pill-btn pill-btn-yellow hero-btn">
              Get a Quote
            </a>
          </div>
        </div>
      </section>
      
      <WaveDivider toColor="teal" />

      {/* 2. How It Works */}
      <section className="how-it-works bg-teal">
        <div className="container">
          <h2 className="section-title text-white">How It Works.</h2>
          
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-num">01</div>
              <h3 className="step-title">Call or Email Us</h3>
              <p className="step-desc">Reach out with your date, expected headcount, and location.</p>
            </div>
            
            <div className="step-card">
              <div className="step-num">02</div>
              <h3 className="step-title">Choose Your Menu</h3>
              <p className="step-desc">Pick from our pre-set packages or build a custom menu.</p>
            </div>
            
            <div className="step-card">
              <div className="step-num">03</div>
              <h3 className="step-title">We Show Up & Serve</h3>
              <p className="step-desc">We handle all the setup, cooking, and serving while you enjoy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Yellow Marquee */}
      <Marquee items={marqueeItems} color="yellow" speed="32s" />

      {/* 4. Catering Menu */}
      <section className="catering-menu-section bg-white section">
        <div className="container">
          <div className="catering-menu-grid">
            
            <div className="cat-menu-col">
              <h3 className="cat-menu-title">Mains</h3>
              <ul className="cat-menu-list">
                <li>House ground burgers</li>
                <li>Vegetarian burgers</li>
                <li>Grilled vegetables, chicken or beef tacos</li>
                <li>BBQ gourmet sausage</li>
                <li>Slow braised BBQ pulled pork</li>
                <li>BBQ chicken breast</li>
              </ul>
            </div>

            <div className="cat-menu-col">
              <h3 className="cat-menu-title">Salads</h3>
              <ul className="cat-menu-list">
                <li>Romaine heart Caesar w/ creamy dressing</li>
                <li>Pasta & vegetable salad w/ citrus dressing</li>
                <li>Mixed organic greens w/ balsamic dressing</li>
                <li>Asian cabbage slaw w/ lime-ginger vinaigrette</li>
                <li>Rustic Greek salad w/ herb dressing</li>
                <li>Mixed baby potato w/ dill & digonaise dressing</li>
              </ul>
            </div>
          </div>

          <div className="includes-bar bg-teal">
            <span className="includes-label">All Selections Served With</span>
            <div className="includes-chips">
              <span className="includes-chip"><span className="dot"></span>Condiments & trimmings</span>
              <span className="includes-chip"><span className="dot"></span>Canned pop or bottled water</span>
              <span className="includes-chip"><span className="dot"></span>Ice cream bars</span>
              <span className="includes-chip"><span className="dot"></span>Setup & delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pricing */}
      <section className="pricing-section bg-offwhite section">
        <div className="container">
          <h2 className="section-title text-orange text-center">Pick Your Package.</h2>
          
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3 className="tier-name">Starter</h3>
              <p className="tier-desc">Perfect for casual get-togethers.</p>
              <div className="tier-price">
                <span className="dollar">$</span>20.95
              </div>
              <div className="tier-per">per person</div>
              <ul className="tier-list">
                <li>Pick 1 Main</li>
                <li>Pick 1 Salad</li>
                <li>Condiments & trimmings</li>
                <li>Pop or bottled water</li>
                <li>Ice cream bars</li>
              </ul>
            </div>

            <div className="pricing-card featured">
              <div className="featured-badge">Most Popular</div>
              <h3 className="tier-name">Classic</h3>
              <p className="tier-desc">The standard shack experience.</p>
              <div className="tier-price">
                <span className="dollar">$</span>30.95
              </div>
              <div className="tier-per">per person</div>
              <ul className="tier-list">
                <li>Pick 2 Mains</li>
                <li>Pick 2 Salads</li>
                <li>Condiments & trimmings</li>
                <li>Pop or bottled water</li>
                <li>Ice cream bars</li>
              </ul>
              <a href={MAILTO_BOOK_CLASSIC} className="pill-btn pill-btn-teal w-full mt-8">
                Book Classic
              </a>
            </div>

            <div className="pricing-card">
              <h3 className="tier-name">Full Spread</h3>
              <p className="tier-desc">When you want to try it all.</p>
              <div className="tier-price">
                <span className="dollar">$</span>40.95
              </div>
              <div className="tier-per">per person</div>
              <ul className="tier-list">
                <li>Pick 3 Mains</li>
                <li>Pick 3 Salads</li>
                <li>Condiments & trimmings</li>
                <li>Pop or bottled water</li>
                <li>Ice cream bars</li>
              </ul>
            </div>
          </div>
          
          <p className="pricing-note text-center mt-8">Tax (13%) and gratuity (20%) not included.</p>
        </div>
      </section>

      {/* 6. Locations Strip */}
      <section className="locations-strip bg-yellow">
        <div className="container loc-strip-inner">
          <div className="loc-strip-text">
            <h3 className="loc-strip-title text-orange">We Come to Your Beach.</h3>
            <p className="loc-strip-sub">Serving the greater Ottawa area from our three locations.</p>
          </div>
          <div className="loc-chips text-orange">
            <span className="loc-chip">Britannia Beach</span>
            <span className="loc-chip">Mooney's Bay</span>
            <span className="loc-chip">Petrie Island</span>
            <span className="loc-chip custom-chip">Custom Locations Available</span>
          </div>
        </div>
      </section>

      {/* 7. CTA / Contact */}
      <section className="catering-cta section bg-teal">
        <div className="container text-center relative z-10">
          <h3 className="section-eyebrow text-white text-opacity-55">Let's Make It Happen</h3>
          <h2 className="section-title text-white">Ready to <br /> <span className="text-yellow">Book?</span></h2>
          
          <div className="catering-phone">
            <a href={PHONE_TEL} className="phone-number">
              {PHONE_DISPLAY}
            </a>
            <p className="phone-note text-white text-opacity-45">Special events & catering line</p>
          </div>

          <a href={`mailto:${EMAIL}`} className="email-link mt-8">
            {EMAIL}
          </a>
        </div>
      </section>

    </div>
  );
};

export default Catering;
