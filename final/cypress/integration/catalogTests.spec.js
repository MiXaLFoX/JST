import Page from '../pageObjects/Page';
import Catalog from '../pageObjects/CatalogPage';
import Login from "../pageObjects/pageComponents/LoginModal";
import Header from "../pageObjects/pageComponents/Header";
import catalogData from '../pageObjects/pageData/catalogData';
import headerData from '../pageObjects/pageData/headerData';

describe('catalog tests', () => {
  const page = new Page();
  before('navigate to page', () => {
    page.navigate();
    Header.catalogBtn.click();
  });

  it("Check category list", ()=>{
    Catalog.catalogNavigationList.should('have.length', 13).and('be.visible');
  });

  it('Should choose a category and check if goods in list are smartphones', () => {
    Catalog.getCategory(catalogData.category.phones, catalogData.category.smartPhones);
    Catalog.catalogList.should($el => expect($el.first()).to.contain(catalogData.category.productClass));
  });

  it('Check filter class names if collapsed', ()=>{
    Catalog.filter.contains(catalogData.category.filterName).parent().should('have.class', 'filter-header');
    Catalog.filter.contains(catalogData.category.filterName).parent().click().should('have.class', 'filter-header collapsed');
  });

  it('Should check filtered quantity', ()=>{
    Catalog.filter.contains(catalogData.category.filterName).parent().click();
    Catalog.showMoreBtn.click();
    Catalog.filter.contains(catalogData.category.brandName).click().find('span').invoke('text')
      .then(text => parseInt(text.match(/\d+/)[0]))
      .then(val => Catalog.filteredCatalogList.find('.catalog-item').its('length').should('eq', val));
  });

  it('Should add a product to favorites', ()=>{
    Login.loginToAccount(headerData.header.userPhone, headerData.header.userPass);
    Catalog.filteredCatalogListIfLoggedin.contains(catalogData.category.modelName)
      .parents('.catalog-item')
      .find('[title="В избранное"]')
      .click().should('have.class', 'btn btn--clear active')
  })
});