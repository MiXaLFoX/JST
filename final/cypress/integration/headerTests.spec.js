const Page = require('../pageObjects/Page');
const Header = require('../pageObjects/pageComponents/Header');
const headerMenuData = require('../pageObjects/pageData/headerData');

describe('header tests', () => {
  const page = new Page();
  before('navigate to page', () => {
    page.navigate();
  });

  after('navigate to home page', ()=>{
    page.navigate();
  });

  it.skip('Check menu links and their landing pages', () => {
    Header.menuItems.contains("Смартфоны и гаджеты").click();
    cy.url().should('contain', "/catalog" + headerMenuData.header.phones);
    Header.menuItems.contains("Телевизоры и видео").click();
    cy.url().should('contain', "/catalog" + headerMenuData.header.tvs);
    Header.menuItems.contains("Ноутбуки и компьютеры").click();
    cy.url().should('contain', "/catalog" + headerMenuData.header.laptops);
    Header.menuItems.contains("Аудио").click({force: true});
    cy.url().should('contain', "/catalog" + headerMenuData.header.audio);
  });

  it('Check menu styles when clicking catalog button', ()=>{
    Header.catalogBtn.click();
    Header.menuItems.should('have.css', 'margin-top', '-40px').and('not.be.visible');
  });

  it('Check searchField', ()=>{
    Header.productSearch(headerMenuData.header.findGoods);
    Header.searchTips.children().first().should('have.text', headerMenuData.header.findGoods);
  });

  it('Check dropdown message/status of favorite button if not logged in', ()=>{
    Header.iconBtns.contains(headerMenuData.header.iconBtns.find(item => item === "Избранное")).click();
    Header.favDrop.find('p').should('have.text', headerMenuData.header.favMessage);
  });

  it('Check menu has class-name "scrolled" when the page is scrolled', ()=>{
    cy.window().scrollTo('center', { easing: 'linear' });
    Header.menuItems.should('have.class', 'scrolled').and('not.be.visible');
  });
});
