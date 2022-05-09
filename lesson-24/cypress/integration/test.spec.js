const Page = require('./PageObjects/Page');
const Halpers = require('./PageObjects/pageComponents/helpers/helpers');
const HeaderMenu = require('./PageObjects/pageComponents/headerMenu');
const HomePage = require('./PageObjects/HomePage');
const SearchField = require('./PageObjects/pageComponents/searchField');
const SmartphonePage = require('./PageObjects/SmartphonesPage');
const { expect } = require('chai');

describe('check sila.by', () => {
  const page = new Page();
  before('navigate to page', () => {
    page.navigate('https://sila.by/');
  });

  it('should check title', () => {
    cy.title().should('eq', '«ЭЛЕКТРОСИЛА» - интернет-магазин бытовой техники в Минске')
  });

  it('should check header menu length', () => {
    HeaderMenu.menuItems.find('a').should('have.length', 9);
  });

  it('should check the sales button styles', () => {
    HomePage.salesButton.should('have.css', 'transition');
  });

  it('should go to smatphones page', () => {
    HomePage.smartphonesButton.click();
    cy.title().should('eq', 'Купить мобильный телефон в Минске, цены на смартфоны в интернет-магазине');
  });

  it('should find iphone', () => {
    SearchField.performSearch('iphone 13');
    cy.title().should('contain', 'iphone 13');
  });

  it('find black iphone', () => {
    SmartphonePage.colorFilter.click();
    SmartphonePage.blackColorCheckbox.click().should('be.checked');
    SmartphonePage.filterQuantity.should('eq', '[1]');
    SmartphonePage.filteredLink.click();
    SmartphonePage.goodsQuantity.should('have.length', 1);
  });
});