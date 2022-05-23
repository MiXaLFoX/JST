const Page = require('./Page');
const Header = require('./pageComponents/Header');
const locators = require('../locators');

class CartPage extends Page{
  get mainAddToCartBtn(){
    return cy.get(locators.cart.mainAddToCartBtn);
  }

  get mainAddToCartBtnAfterScroll(){
    return cy.get(locators.cart.mainAddToCartBtnAfterScroll);
  }

  get cartModal(){
    return cy.get(locators.cart.cartModal);
  }

  get checkBtn(){
    return cy.get(locators.cart.checkBtn);
  }

  get modalCloseBtn(){
    return cy.get(locators.cart.modalCloseBtn);
  }

  get serchResults(){
    return cy.get(locators.cart.searchResults);
  }

  get modalRemoveBtn(){
    return cy.get(locators.cart.modalRemoveBtn);
  }

  get modalGoToCartBtn(){
    return cy.get(locators.cart.modalGoToCartBtn);
  }

  get productsInCart(){
    return cy.get(locators.cart.productsInCart);
  }

  get cartTotalSum(){
    return cy.get(locators.cart.cartTotalSum);
  }

  addProductToCart(productName){
    Header.productSearch(productName);
    Header.searchBtn.click();
  }
}

module.exports = new CartPage();