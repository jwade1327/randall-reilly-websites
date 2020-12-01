const topics = [
  { href: '/trucks', label: 'Trucks' },
  { href: '/business', label: 'Business' },
  { href: '/technology', label: 'Technology' },
  { href: '/workforce', label: 'Workforce' },
  { href: '/products', label: 'Products' },
  { href: '/opinion', label: 'Opinion' },
  { href: '/ccj-top-250', label: 'Top 250' },
];

const menuSecondary = [
  { href: '/ccj-innovators', label: 'CCJ Innovators' },
  { href: '/ccj-symposiums', label: 'CCJ Symposiums' },
  { href: '/whitepapers', label: 'Whitepapers' },
  { href: '/newsletters', label: 'Newsletters' },
  { href: '/page/advertise', label: 'Advertise' },
  { href: '/contact-us', label: 'Contact Us' },
];

module.exports = {
  primary: {
    items: [],
  },
  secondary: {
    items: topics,
  },
  tertiary: {
    items: [],
  },
  footer: {
    items: [
      { href: '/termsandprivacy', label: 'Terms of User and Privacy Policy' },
      { href: '/collection', label: 'Point of Collection Notice' },
      { href: 'https://privacyportal-cdn.onetrust.com/dsarwebform/49a9a972-547e-4c49-b23c-4cc77554cacb/cddab1bc-7e58-4eca-a20d-be42716734cf.html', label: 'Do Not Sell My Personal Information', target: '_blank' },
      { href: '/contact-us', label: 'Contact Us' },
    ],

    topics,
    more: menuSecondary,
    newsletter: {
      formAction: '/newsletters',
      cta: 'Sign up for the <strong>CCJ Daily</strong> to keep up with ...',
    },
  },
  menu: [
    {
      modifiers: ['primary'],
      items: topics,
    },
    {
      modifiers: ['secondary'],
      items: menuSecondary,
    },
  ],
};
