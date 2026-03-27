import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../constants/reviews';
import './ReviewsMarquee.css';

const ReviewCard = ({ quote, name, source }) => (
  <article className="review-card">
    <div className="review-stars" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} className="review-star" size={18} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
    <blockquote className="review-quote">
      <p>{quote}</p>
    </blockquote>
    <footer className="review-footer">
      <cite className="review-name">{name}</cite>
      <span className="review-source">{source}</span>
    </footer>
  </article>
);

const ReviewsMarquee = () => {
  return (
    <section
      className="reviews-marquee-section bg-offwhite"
      aria-labelledby="reviews-heading"
    >
      <div className="container reviews-marquee-header">
        <h3 className="section-eyebrow text-orange text-opacity-50">Reviews</h3>
        <h2 id="reviews-heading" className="section-title text-orange">
          Love from <br /> the Beach.
        </h2>
      </div>

      <div
        className="reviews-marquee-mask"
        role="region"
        aria-label="Customer reviews, scrolling"
      >
        <div className="reviews-marquee-track">
          <div className="reviews-marquee-group">
            {REVIEWS.map((r, i) => (
              <ReviewCard key={`a-${i}`} {...r} />
            ))}
          </div>
          <div className="reviews-marquee-group" aria-hidden="true">
            {REVIEWS.map((r, i) => (
              <ReviewCard key={`b-${i}`} {...r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsMarquee;
