const Page = require('../../Page');

class Helpers extends Page{
  clickElement(selector){
    cy.get(selector).click();
  }
}

module.exports = new Helpers();