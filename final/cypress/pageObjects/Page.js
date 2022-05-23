const locators = require('../locators');

class Page{
  navigate = () => {
    cy.visit('/');
  };
}

module.exports = Page;