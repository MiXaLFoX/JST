const Page = require('./Page');
const locators = require('../locators');

class CatalogPage extends Page{
  get catalogNavigationList(){
    return cy.get(locators.catalog.navigationList);
  }

  get categoryList(){
    return cy.get(locators.catalog.categoryList);
  }

  get filter(){
    return cy.get(locators.catalog.filter);
  }

  get showMoreBtn(){
    return cy.get(locators.catalog.showMoreBtn);
  }

  get showLessBtn(){
    return cy.get(locators.catalog.sowLessBtn);
  }

  get catalogList(){
    return cy.get(locators.catalog.catalogList);
  }

  get filteredCatalogList(){
    return cy.get(locators.catalog.filteredCatalogList);
  }

  get filteredCatalogListIfLoggedin(){
    return cy.get(locators.catalog.filteredCatalogListIfLoggedin);
  }

  get activeCatalogFavBtn(){
    return cy.get();
  }

  getCategory(category, subCategory){
    this.catalogNavigationList.find('a').contains(category).trigger('mouseover');
    this.categoryList.contains(subCategory).click();
  }

  getFilter(filterName){
    this.filter.contains(filterName).click();
  }
}

module.exports = new CatalogPage();