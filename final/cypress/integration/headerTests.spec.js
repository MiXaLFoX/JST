const Page = require('../pageObjects/Page');
const Header = require('../pageObjects/pageComponents/Header');
const headerMenuData = require('../pageObjects/pageData/headerData');

describe('header tests', () => {
  const page = new Page();
  before('navigate to page', () => {
    page.navigate();
  });

  // afterEach('navigate to home page', ()=>{
  //   page.navigate();
  // });

  it('Check searchField', ()=>{
    Header.searchField.type(headerMenuData.header.findGoods, {force: true}).type('{enter}', {force: true});
   // Header.searchBtn.click();
  });

  // it('Check menu links and their landing pages', () => {
  //   Header.menuItems.contains("Смартфоны и гаджеты").click();
  //   cy.url().should('contain', "/catalog" + headerMenuData.header.phones);
  //   Header.menuItems.contains("Телевизоры и видео").click();
  //   cy.url().should('contain', "/catalog" + headerMenuData.header.tvs);
  //   Header.menuItems.contains("Ноутбуки и компьютеры").click();
  //   cy.url().should('contain', "/catalog" + headerMenuData.header.laptops);
  //   Header.menuItems.contains("Аудио").click({force: true});
  //   cy.url().should('contain', "/catalog" + headerMenuData.header.audio);
  // });
  //
  // it('Check menu styles when clicking catalogue button', ()=>{
  //   Header.catalogBtn.click();
  //   Header.menuItems.should('have.css', 'margin-top', '-40px').and('not.be.visible');
  // });
  //
  it('Check dropdown message/status of favorite button', ()=>{
    Header.iconBtns.contains(headerMenuData.header.iconBtns.find(item => item === "Избранное")).click();
    Header.logBtn.children().then($el => {
        if($el.find('.h-drop__text').length === 0) {
          Header.favDrop.should('have.text', headerMenuData.header.favMessage);
        } else {
          Header.favNumber.invoke('text').then(parseFloat).should('be.greaterThan', 0)
        }
      });
  });
  //
  // it('Check menu has class-name "scrolled" when the page is scrolled', ()=>{
  //   cy.window().scrollTo('center', { easing: 'linear' });
  //   Header.menuItems.should('have.class', 'scrolled').and('not.be.visible');
  // });
});
