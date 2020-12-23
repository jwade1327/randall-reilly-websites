const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const queryFragment = require('@randall-reilly/package-global/graphql/fragments/website-section-page');
const products = require('../templates/website-section/products');
const safetyWatch = require('../templates/website-section/safety-watch');
const section = require('../templates/website-section');

module.exports = (app) => {
  app.get('/:alias(products)', withWebsiteSection({
    template: products,
    queryFragment,
  }));
  app.get('/:alias(safety-watch)', withWebsiteSection({
    template: safetyWatch,
    queryFragment,
  }));
  app.get('/:alias(safety-watch/[a-z0-9-/]+)', withWebsiteSection({
    template: safetyWatch,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
