const Page = require('../Page');

class SearchField extends Page {
  get searchField (){
    return cy.get('.top .top_transp.menu_not_verf .ui-autocomplete-input');
  }

  get searchButton (){
    cy.get('.top .top_transp.menu_not_verf input[type="submit"]');
  }

  performSearch (searchTerm){
    this.searchField.type(searchTerm).type('{enter}');
  }
}

module.exports = new SearchField();