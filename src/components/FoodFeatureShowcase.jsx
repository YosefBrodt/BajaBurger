import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { ArrowRight, Flame } from 'lucide-react';
import './FoodFeatureShowcase.css';

const ITEMS = [
  {
    id: 'burger',
    label: 'Baja Burger',
    price: '$11.95',
    tag: 'The main event',
    short:
      'Third-pound pure beef, toasted brioche, and our signature baja sauce — the reason people line up at the sand.',
    bullets: ['100% pure ground beef', 'House sauce & fresh veg', 'Griddled to order'],
    img: '/baja_burger_1774626452140.png',
    fallback:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'tacos',
    label: 'Fish Tacos',
    price: '$5.95',
    tag: 'Beach snack',
    short:
      'Crispy fish, cabbage slaw, lime, and baja sauce in a warm shell — salty air optional, flavour mandatory.',
    bullets: ['Baja sauce & slaw', 'Fresh lime finish', 'Perfect with a cold drink'],
    img: '/fish_tacos.jpg',
    fallback:
      'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'poutine',
    label: 'Poutine',
    price: '$11.95',
    tag: 'Canadian comfort',
    short:
      'St. Albert curds, rich gravy, and hot crispy fries — fork food for when the sun goes down.',
    bullets: ['Real cheese curds', 'Shack gravy', 'Fresh-cut fry base'],
    img: '/poutine.jpg',
    fallback:
      'https://images.unsplash.com/photo-1588168333986-50882e382d54?auto=format&fit=crop&q=80&w=1200',
  },
];

export default function FoodFeatureShowcase() {
  const [active, setActive] = useState(ITEMS[0].id);
  const current = ITEMS.find((i) => i.id === active) ?? ITEMS[0];

  return (
    <section className="section bg-teal food-showcase food-feature-wrap">
      <div className="container">
        <div className="food-feature-grid">
          <div className="food-feature-copy">
            <h3 className="section-eyebrow text-white text-opacity-60">Fresh & Real</h3>
            <h2 className="section-title text-white food-feature-title">
              The Food <br />
              Hits Different.
            </h2>
            <p className="food-feature-lede text-white">
              Tap a dish to swap the story — same beach energy, zero boring slideshow energy.
            </p>

            <div className="food-feature-chips" aria-hidden="true">
              <span className="food-feature-chip">
                <Flame size={16} strokeWidth={2.5} />
                Ottawa beach
              </span>
              <span className="food-feature-chip">Made to order</span>
              <span className="food-feature-chip">Shack classics</span>
            </div>

            <div className="food-feature-panel" key={current.id}>
              <p className="food-feature-tag text-yellow">{current.tag}</p>
              <div className="food-feature-name-row">
                <h3 className="food-feature-name text-white">{current.label}</h3>
                <span className="food-feature-price text-yellow">{current.price}</span>
              </div>
              <p className="food-feature-story text-white">{current.short}</p>
              <ul className="food-feature-bullets">
                {current.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            <Link to="/menu" className="pill-btn pill-btn-yellow food-feature-cta">
              Explore the full menu
              <ArrowRight size={18} style={{ marginLeft: 8 }} />
            </Link>
          </div>

          <div className="food-feature-visual">
            <div className="food-feature-frame">
              <div className="food-feature-media">
                <img
                  key={active}
                  src={current.img}
                  alt={current.label}
                  className="food-feature-img-single"
                  onError={(e) => {
                    e.target.src = current.fallback;
                  }}
                />
              </div>
              <div className="food-feature-scrim" aria-hidden="true" />
              <div className="food-feature-tabs" role="tablist" aria-label="Signature dishes">
                {ITEMS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={item.id === active}
                    className={clsx('food-feature-tab', item.id === active && 'is-active')}
                    onClick={() => setActive(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
