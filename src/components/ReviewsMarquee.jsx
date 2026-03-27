import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS_ROW1, REVIEWS_ROW2 } from '../constants/reviews';
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

const ReviewRow = ({ reviews, rowClass }) => (
  <div className="reviews-marquee-mask">
    <div className={`reviews-marquee-track ${rowClass}`}>
      <div className="reviews-marquee-group">
        {reviews.map((r, i) => (
          <ReviewCard key={`r1-${i}`} {...r} />
        ))}
      </div>
      <div className="reviews-marquee-group" aria-hidden="true">
        {reviews.map((r, i) => (
          <ReviewCard key={`r2-${i}`} {...r} />
        ))}
      </div>
    </div>
  </div>
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
        className="reviews-marquee-rows"
        role="region"
        aria-label="Customer reviews, two scrolling rows"
      >
        <ReviewRow reviews={REVIEWS_ROW1} rowClass="reviews-marquee-track--row-a" />
        <ReviewRow reviews={REVIEWS_ROW2} rowClass="reviews-marquee-track--row-b" />
      </div>
    </section>
  );
};

export default ReviewsMarquee;
