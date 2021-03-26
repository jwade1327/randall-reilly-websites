const topics = {
  primary: [
    { href: '/business', label: 'Business' },
    { href: '/equipment', label: 'Equipment' },
    { href: '/better-roads', label: 'Better Roads' },
    { href: '/big-iron-dealer', label: 'Big Iron Dealer' },
    { href: '/technology', label: 'Technology' },
    { href: '/workforce', label: 'Safety' },
  ],
  expanded: [
  ],
  secondary: [
    { href: '/workforce/safety', label: 'Workforce' },
    { href: '/safety-watch', label: 'Safety Watch' },
    { href: '/white-papers', label: 'White Papers' },
    { href: '/termsandprivacy', label: 'Terms of Use'}
  ],
};

const utilities = [
  { href: '/page/advertise', label: 'Advertise' },
  { href: '/page/contact-us', label: 'Contact Us' },
  { href: 'https://randallreilly.dragonforms.com/loading.do?omedasite=eqw_subscriptions', label: 'Newsletters', target: '_blank' },
];

const mobileMenu = {
  primary: [
    ...topics.primary,
    ...topics.expanded,
  ],
  secondary: [
    ...topics.secondary,
    { href: 'https://randallreilly.dragonforms.com/loading.do?omedasite=eqw_subscriptions', label: 'Newsletters', target: '_blank' },
  ],
};

const desktopMenu = {
  about: [...utilities],
  sections: [
    ...topics.primary,
    ...topics.expanded,
    ...topics.secondary,
  ],
};

module.exports = {
  desktopMenu,
  mobileMenu,
  primary: {
    items: [],
  },
  secondary: {
    items: topics.primary,
  },
  tertiary: {
    items: [],
  },
  footer: {
    items: [
      { href: '/termsandprivacy', label: 'Terms of User and Privacy Policy' },
      { href: 'https://www.randallreilly.com/point-of-collection-notice/', label: 'Point of Collection Notice' },
      { href: 'https://privacyportal-cdn.onetrust.com/dsarwebform/49a9a972-547e-4c49-b23c-4cc77554cacb/cddab1bc-7e58-4eca-a20d-be42716734cf.html', label: 'Do Not Sell My Personal Information', target: '_blank' },
      { href: '/page/contact-us', label: 'Contact Us' },
    ],
    topics: topics.primary,
    more: utilities,
  },
};
