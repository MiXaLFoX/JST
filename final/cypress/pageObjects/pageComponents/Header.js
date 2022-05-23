const Page = require('../Page');
const locators = require('../../locators');
const headerMenuData = require('../pageData/headerData');

class Header extends Page{
  get menuItems(){
    return cy.get(locators.header.menuItems);
  }

  get catalogBtn(){
    return cy.get(locators.header.catalogBtn);
  }

  get iconBtns(){
    return cy.get(locators.header.iconBtnsContainer);
  }

  get favDrop(){
    return cy.get(locators.header.favDrop);
  }

  get logBtn(){
    return cy.get(locators.login.accountBtn);
  }

  get favNumber(){
    return cy.get(locators.header.favNum);
  }

  get searchContainer(){
    return cy.get(locators.header.searchContainer);
  }

  get searchField(){
    return cy.get(locators.header.searchField);
  }

  get searchBtn(){
    return cy.get(locators.header.searchBtn);
  }

  get searchTips(){
    return cy.get(locators.header.searchTips);
  }

  get multiSearchResults(){
    return cy.get(locators.header.multiSearchResults);
  }

  get cartDrop(){
    return cy.get(locators.header.cartDrop);
  }

  productSearch(productName){
    this.searchContainer.invoke('show');
    this.searchField.type(productName);
  }
}

module.exports = new Header();