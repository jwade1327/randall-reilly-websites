const topics = [
  { href: '/trucks', label: 'Trucks' },
  { href: '/business', label: 'Business' },
  { href: '/regulations', label: 'Regulations' },
  { href: '/lifestyle', label: 'Lifestyle' },
  { href: '/custom-rigs', label: 'Custom Rigs' },
  { href: '/gear', label: 'Gear' },
];

const menuSecondary = [
  { href: '/readers-rigs', label: 'Reader Rigs' },
  { href: '/overdrive-radio', label: 'Overdrive Radio' },
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
      { href: '/page/privacy-policy', label: 'Terms of User and Privacy Policy' },
      { href: '#', label: 'Point of Collection Notice' },
      { href: '#', label: 'Do Not Sell My Personal Information' },
      { href: '/contact-us', label: 'Contact Us' },
    ],

    topics,
    more: menuSecondary,
    newsletter: {
      formAction: '/newsletters',
      cta: 'Sign up for the Overdrive Daily to keep up with trucking news, equipment and business information.',
    },
  },
  menu: [
    {
      modifiers: ['primary'],
      items: [
        ...topics,
        { href: '/channel-19', label: 'Channel 19' },
        { href: '/partners-in-business', label: 'Partners in Business' },
      ],
    },
    {
      modifiers: ['secondary'],
      items: menuSecondary,
    },
  ],
};
