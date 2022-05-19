const Page = require('../Page');

class CatalogMenu extends Page{
  get menuItems(){
    return cy.get('.header_menu__wrap');
  }
}

module.exports = new CatalogMenu();