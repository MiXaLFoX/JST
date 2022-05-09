const Page = require('../Page');

class HeaderMenu extends Page{
  get menuItems(){
    return cy.get('.header_menu__wrap');
  }
}

module.exports = new HeaderMenu();