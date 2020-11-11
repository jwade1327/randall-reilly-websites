const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');

module.exports = {
  navigation,
  gam,
  nativeX,
  company: 'Randall-Reilly, LLC',
  logos: {
    navbar: {
      src: 'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/ovd-logo.svg?h=40',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/ovd-logo.svg?h=80 2x',
      ],
    },
    footer: {
      src: 'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/ovd-logo.svg?h=35',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/randallreilly/all/image/static/ovd-logo.svg?h=70 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/OverdriveTrucking/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/overdriveupdate', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/overdrive-partner-solutions/', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCCJiBY50M2ie-QBjdDU4p1A', target: '_blank' },
  ],
  gtm: {
    containerId: '32817982',
  },
};
