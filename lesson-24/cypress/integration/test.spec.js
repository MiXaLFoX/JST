const Page = require('./PageObjects/Page');
const Halpers = require('./PageObjects/pageComponents/helpers/helpers');
const HeaderMenu = require('./PageObjects/pageComponents/headerMenu');
const HomePage = require('./PageObjects/HomePage');

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

  it('should click elements', () => {
    Halpers.clickElement(HomePage.smartphonesButton);
    cy.title().should('eq', 'Купить мобильный телефон в Минске, цены на смартфоны в интернет-магазине');
  });
});