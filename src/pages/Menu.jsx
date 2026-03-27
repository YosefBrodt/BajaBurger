import React, { useState, useEffect } from 'react';
import Marquee from '../components/Marquee';
import './Menu.css';

const marqueeItems = ['FROZEN COCKTAILS $15.95', 'BEER FROM $7.50', 'REAL FRUIT CHILLERS $10.50', '20oz MILKSHAKES $11.95', 'SELTZERS & COOLERS $8.50'];

const categories = [
  { id: 'burgers', label: 'Burgers' },
  { id: 'chicken', label: 'Chicken' },
  { id: 'tacos-dogs', label: 'Tacos & Dogs' },
  { id: 'sides', label: 'Sides' },
  { id: 'drinks', label: 'Drinks' },
  { id: 'baja-bar', label: 'Baja Bar' }
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState('burgers');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, {
      rootMargin: '-30% 0px -60% 0px'
    });

    categories.forEach(cat => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 130, // Account for fixed nav + sticky tabs
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="menu-page bg-offwhite">
      {/* 1. Hero */}
      <section className="menu-hero bg-teal">
        <div className="ghost-text">MENU</div>
        <div className="menu-hero-container">
          <div className="menu-hero-left">
            <div className="section-eyebrow text-white text-opacity-60">Ottawa Beach Food</div>
            <h1 className="hero-h1 text-white m-0">
              The <span className="text-yellow">Good</span> <br/> Stuff.
            </h1>
          </div>
          <div className="menu-hero-right">
            <div className="hero-note">
              100% pure ground beef. Southern crispy chicken. Fresh cut fries. Made to order at the beach — open daily from 11:30am.
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sticky Nav */}
      <div className="sticky-nav bg-orange">
        <div className="sticky-nav-container">
          {categories.map(cat => (
            <button 
              key={cat.id}
              className={`sticky-tab ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => scrollTo(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Menu Sections */}
      <div className="menu-content-wrapper">
        <div className="container">
          
          {/* Section: Burgers */}
          <section id="burgers" className="menu-section">
            <div className="menu-section-header">
              <h2 className="menu-h2 text-orange">Burgers</h2>
              <span className="accent-label">100% Pure Beef</span>
            </div>
            <p className="menu-section-desc">Served on a toasted brioche bun with our signature fixings.</p>
            <div className="menu-divider"></div>

            <div className="menu-item-row-full">
              <div className="menu-item-left">
                <div className="menu-item-title-wrapper">
                  <h3 className="menu-item-title">Baja Burger 1/3lb</h3>
                  <span className="badge badge-yellow">Fan Favourite</span>
                </div>
                <p className="menu-item-desc">Lettuce, tomato, pickle, and our signature baja sauce.</p>
              </div>
              <div className="menu-item-price">$11.95</div>
            </div>

            <div className="menu-item-row-full">
              <div className="menu-item-left">
                <div className="menu-item-title-wrapper">
                  <h3 className="menu-item-title">Jerk Burger</h3>
                  <span className="badge badge-orange">Spicy</span>
                </div>
                <p className="menu-item-desc">Spicy jerk seasoning, fresh cabbage slaw.</p>
              </div>
              <div className="menu-item-price">$11.95</div>
            </div>

            <div className="menu-item-row-full">
              <div className="menu-item-left">
                <div className="menu-item-title-wrapper">
                  <h3 className="menu-item-title">Big Kahuna</h3>
                  <span className="badge badge-yellow">Double Patty</span>
                </div>
                <p className="menu-item-desc">Two 1/3lb patties, double cheese, bacon, all the fixings.</p>
              </div>
              <div className="menu-item-price">$18.50</div>
            </div>

            <div className="menu-item-row-full">
              <div className="menu-item-left">
                <div className="menu-item-title-wrapper">
                  <h3 className="menu-item-title">Baja Veggie</h3>
                </div>
                <p className="menu-item-desc">Beyond Meat patty, baja sauce, standard fixings.</p>
              </div>
              <div className="menu-item-price">$12.00</div>
            </div>

            <div className="menu-item-row-full">
              <div className="menu-item-left">
                <div className="menu-item-title-wrapper">
                  <h3 className="menu-item-title">Vegan Burger</h3>
                  <span className="badge badge-teal">Beyond Meat</span>
                </div>
                <p className="menu-item-desc">Beyond Meat patty, vegan bun, lettuce, tomato.</p>
              </div>
              <div className="menu-item-price">$12.00</div>
            </div>

            <div className="menu-item-row-full">
              <div className="menu-item-left">
                <div className="menu-item-title-wrapper">
                  <h3 className="menu-item-title">Kids Combo</h3>
                </div>
                <p className="menu-item-desc">Plain 1/4lb burger served with fresh cut fries.</p>
              </div>
              <div className="menu-item-price">$7.50</div>
            </div>

            <div className="gf-note">
              <span className="gf-dot"></span>
              Gluten free buns available +$1.50
            </div>

            <div className="addons-strip">
              <div className="addon-label">ADD ON</div>
              <div className="addon-pills">
                <div className="addon-pill-menu">Cheese <span>$1.50</span></div>
                <div className="addon-pill-menu">Bacon <span>$1.50</span></div>
                <div className="addon-pill-menu">Fried Egg <span>$1.50</span></div>
              </div>
            </div>
          </section>

          {/* Section: Chicken */}
          <section id="chicken" className="menu-section">
            <div className="menu-section-header">
              <h2 className="menu-h2 text-orange">Chicken</h2>
            </div>
            <div className="menu-divider"></div>

            <div className="menu-item-row-full">
              <div className="menu-item-left">
                <div className="menu-item-title-wrapper">
                  <h3 className="menu-item-title">Baja Chicken</h3>
                </div>
                <p className="menu-item-desc">Southern crispy chicken breast, mayo, lettuce, pickles.</p>
              </div>
              <div className="menu-item-price">$9.50</div>
            </div>

            <div className="menu-item-row-full">
              <div className="menu-item-left">
                <div className="menu-item-title-wrapper">
                  <h3 className="menu-item-title">Cajun Chicken</h3>
                  <span className="badge badge-orange">Spicy</span>
                </div>
                <p className="menu-item-desc">Crispy chicken with spicy cajun seasoning, spicy mayo.</p>
              </div>
              <div className="menu-item-price">$9.50</div>
            </div>

            <div className="menu-item-row-full">
              <div className="menu-item-left">
                <div className="menu-item-title-wrapper">
                  <h3 className="menu-item-title">Tenders & Fries</h3>
                </div>
                <p className="menu-item-desc">3 crispy chicken tenders with fresh cut fries and plum sauce.</p>
              </div>
              <div className="menu-item-price">$13.00</div>
            </div>
          </section>

          {/* Section: Tacos & Dogs */}
          <section id="tacos-dogs" className="menu-section">
            <div className="menu-section-header">
              <h2 className="menu-h2 text-orange">Tacos & Dogs</h2>
            </div>
            <div className="menu-divider"></div>

            <div className="menu-item-row-full">
              <div className="menu-item-left">
                <div className="menu-item-title-wrapper">
                  <h3 className="menu-item-title">Fish or Beef Taco</h3>
                </div>
                <p className="menu-item-desc">Baja sauce, cabbage slaw, fresh lime.</p>
              </div>
              <div className="menu-item-price">$5.95</div>
            </div>

            <div className="menu-item-row-full">
              <div className="menu-item-left">
                <div className="menu-item-title-wrapper">
                  <h3 className="menu-item-title">Jumbo Hot Dog</h3>
                </div>
                <p className="menu-item-desc">100% hormone-free all beef dog.</p>
              </div>
              <div className="menu-item-price">$5.95</div>
            </div>
          </section>

          {/* Section: Sides */}
          <section id="sides" className="menu-section">
            <div className="menu-section-header">
              <h2 className="menu-h2 text-orange">Sides</h2>
            </div>
            <div className="menu-divider"></div>

            <div className="sides-grid">
              <div className="menu-item-row-full">
                <div className="menu-item-left">
                  <h3 className="menu-item-title">Fresh Cut Fries</h3>
                </div>
                <div className="menu-item-price">$7.95</div>
              </div>

              <div className="menu-item-row-full">
                <div className="menu-item-left">
                  <h3 className="menu-item-title">Poutine</h3>
                  <p className="menu-item-desc">St. Albert cheese curds, rich gravy.</p>
                </div>
                <div className="menu-item-price">$11.95</div>
              </div>

              <div className="menu-item-row-full">
                <div className="menu-item-left">
                  <h3 className="menu-item-title">Garden Salad</h3>
                  <p className="menu-item-desc">Fresh local greens, house vinaigrette.</p>
                </div>
                <div className="menu-item-price">$9.95</div>
              </div>

              <div className="menu-item-row-full">
                <div className="menu-item-left">
                  <h3 className="menu-item-title">Caesar Salad</h3>
                  <p className="menu-item-desc">Romaine, bacon bits, parmesan, croutons.</p>
                </div>
                <div className="menu-item-price">$9.95</div>
              </div>
            </div>
          </section>

        </div>
      </div>

      <Marquee items={marqueeItems} color="teal" speed="26s" />

      <div className="menu-content-wrapper">
        <div className="container">

          {/* Section: Drinks */}
          <section id="drinks" className="menu-section">
            <div className="menu-section-header">
              <h2 className="menu-h2 text-orange">Drinks</h2>
            </div>
            <div className="menu-divider"></div>

            <div className="drink-card-grid">
              <div className="drink-card">
                <h3 className="drink-title">Real Fruit Chillers</h3>
                <div className="drink-price">$10.50</div>
                <ul className="drink-list">
                  <li>Lemon Chill</li>
                  <li>Strawberry Lemonade</li>
                  <li>Strawberry Blast</li>
                  <li>Mango Mania</li>
                  <li>Pina Colada</li>
                </ul>
              </div>

              <div className="drink-card">
                <h3 className="drink-title">20oz Milkshakes</h3>
                <div className="drink-price">$11.95</div>
                <ul className="drink-list">
                  <li>Vanilla</li>
                  <li>Chocolate</li>
                  <li>Strawberry</li>
                </ul>
              </div>

              <div className="drink-card">
                <h3 className="drink-title">Soft Drinks</h3>
                <div className="drink-price">From $2.50</div>
                <ul className="drink-list">
                  <li>Fountain Pop <span>$3.50</span></li>
                  <li>Iced Tea <span>$3.95</span></li>
                  <li>Bottled Water <span>$2.50</span></li>
                  <li>Sparkling Water <span>$3.50</span></li>
                  <li>Powerade <span>$3.95</span></li>
                  <li>Juice <span>$3.95</span></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Baja Bar */}
          <section id="baja-bar" className="menu-section">
            <div className="menu-section-header">
              <h2 className="menu-h2 text-orange">Baja Bar</h2>
              <span className="accent-label">19+ Only</span>
            </div>
            <div className="menu-divider"></div>

            <div className="drink-card-grid">
              <div className="drink-card">
                <h3 className="drink-title">Frozen Cocktails</h3>
                <div className="drink-price">$15.95 <span>/ 2oz</span></div>
                <ul className="drink-list">
                  <li>Strawberry Daiquiri</li>
                  <li>Mango & Spiced Rum</li>
                  <li>Pina Colada</li>
                  <li>Lime Margarita</li>
                </ul>
              </div>

              <div className="drink-card">
                <h3 className="drink-title">Cold Beer</h3>
                <div className="drink-price">From $7.50</div>
                <ul className="drink-list">
                  <li>Domestic <span>$7.50</span></li>
                  <li>Import <span>$8.50</span></li>
                  <li>Draft <span>$8.00</span></li>
                </ul>
              </div>

              <div className="drink-card">
                <h3 className="drink-title">Seltzers & Coolers</h3>
                <div className="drink-price">$8.50</div>
                <ul className="drink-list">
                  <li>Assorted Flavours</li>
                  <li>White Claw</li>
                  <li>Cottage Springs</li>
                </ul>
              </div>
            </div>

            <div className="allergy-block">
              <div className="allergy-icon">!</div>
              <div className="allergy-content">
                <h4 className="allergy-title">Allergy Notice</h4>
                <p className="allergy-text">Please inform us of any food allergies or dietary restrictions before ordering. We cannot guarantee completely allergen-free meals due to the potential for cross-contamination.</p>
              </div>
            </div>

          </section>
        </div>
      </div>
    </div>
  );
};

export default Menu;
