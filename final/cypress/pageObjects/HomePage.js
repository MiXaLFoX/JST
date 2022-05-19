const Page = require('./Page');
const locators = require('../locators');

class HomePage extends Page {
  get catalogButtons(){
    return cy.get(locators.homePage.catalogButtons);
  }

  get slider(){
    return cy.get(locators.homePage.slider);
  }
}

module.exports = new HomePage();