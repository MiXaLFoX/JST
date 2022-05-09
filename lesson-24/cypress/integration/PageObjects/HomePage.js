const Page = require('./Page');

class HomePage extends Page {
  get catalogButtons(){
    return cy.get('.block_catalog.block_catalog__wrap');
  }

  get salesButton(){
    return this.catalogButtons.find(':nth-child(5)');
  }

  get smartphonesButton (){
    return this.catalogButtons.find(':nth-child(4)');
  }
}

module.exports = new HomePage();