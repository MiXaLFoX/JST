const Page = require('./Page');
const locators = require('../locators');

class CatalogPage extends Page{
  get catalogNavigation(){
    return cy.get(locators.catalog.catalogNavigation);
  }

  get catalogGrid(){
    return cy.get(locators.catalog.catalogGrid);
  }
}

module.exports = new CatalogPage();