const Page = require('../pageObjects/Page');
const HomePage = require('../pageObjects/HomePage');

describe('home page tests', ()=>{
  const page = new Page();
  before('navigate to page', () => {
    page.navigate();
  });

  it('check slider for elements in it', ()=>{
    HomePage.slider.should('be.visible');
    HomePage.slider.children().should('have.length.gt', 1);
  });

  it('check active class name in carousel', ()=>{
    HomePage.slider.find('.swiper-slide-active').should('be.visible');
  })
});