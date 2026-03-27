export const PHONE_DISPLAY = '+1 (613) 769-8885';
export const PHONE_TEL = 'tel:+16137698885';
export const EMAIL = 'hello@bajaburger.ca';

export const mailto = (subject) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;

export const MAILTO_CATERING = mailto('Catering inquiry');
export const MAILTO_BOOK_CLASSIC = mailto('Book Classic package');

export const DIRECTIONS = {
  britannia:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('102 Greenview Ave, Ottawa, ON'),
  mooneys:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('2960 Riverside Dr, Ottawa, ON'),
  petrie:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('795 Tweddle Rd, Orléans, ON'),
};

export const SOCIAL = {
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/',
  tiktok: 'https://www.tiktok.com/',
};
