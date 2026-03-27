/** Swap with real quotes + attribution when the client provides them. */
export const REVIEWS = [
  {
    quote:
      'Best burger I’ve had in Ottawa. Fresh, messy in the right way, and the beach vibe is unbeatable.',
    name: 'Marcus T.',
    source: 'Google',
  },
  {
    quote:
      'Fish tacos were crispy and the slaw was perfect. We’ll be back every weekend this summer.',
    name: 'Priya K.',
    source: 'Google',
  },
  {
    quote:
      'Cold drinks, hot fries, and the staff actually smiles. Exactly what you want after a swim.',
    name: 'Jamie L.',
    source: 'Google',
  },
  {
    quote:
      'Poutine hit the spot — real curds and gravy that doesn’t taste like a chain.',
    name: 'Étienne R.',
    source: 'Google',
  },
  {
    quote:
      'Chicken tenders and fries were huge. Plum sauce was the right call. Kids approved too.',
    name: 'Hannah M.',
    source: 'Google',
  },
  {
    quote:
      'Line moves fast even when it’s busy. Worth the stop on a hot day at the beach.',
    name: 'Owen S.',
    source: 'Google',
  },
  {
    quote:
      'We grabbed catering for a backyard party — burgers showed up hot and the setup was easy.',
    name: 'Danielle P.',
    source: 'Google',
  },
  {
    quote:
      'Mooney’s Bay location after volleyball: ideal. Burger was juicy and the bun held up.',
    name: 'Chris V.',
    source: 'Google',
  },
];

const mid = Math.ceil(REVIEWS.length / 2);
/** First half — top scrolling row */
export const REVIEWS_ROW1 = REVIEWS.slice(0, mid);
/** Second half — bottom scrolling row */
export const REVIEWS_ROW2 = REVIEWS.slice(mid);
