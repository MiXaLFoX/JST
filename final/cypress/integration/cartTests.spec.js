import locators from "../locators";
const Page = require('../pageObjects/Page');
const Cart = require('../pageObjects/CartPage');
const Login = require('../pageObjects/pageComponents/LoginModal');
const Header = require('../pageObjects/pageComponents/Header');
const headerMenuData = require('../pageObjects/pageData/headerData');
const cartData = require('../pageObjects/pageData/cartData');

describe.skip('cart tests', ()=>{
  const page = new Page();
  before('navigate to page', () => {
    page.navigate();
    Login.loginToAccount(headerMenuData.header.userPhone, headerMenuData.header.userPass);
  });

  it('SHould add products to cart', ()=>{
    Cart.addProductToCart(cartData.macbook);
    Cart.mainAddToCartBtn.click();
    Cart.cartModal.should('be.visible');
    Cart.modalCloseBtn.click();
    Cart.cartModal.should('not.be.visible');
  });

  it('Check header cart dropdown', ()=>{
    Header.iconBtns.contains(headerMenuData.header.iconBtns.find(item => item === "Корзина")).click();
    Header.cartDrop.find('.h-drop__cards').should('have.length', 1);
    //Header.cartDrop.find('.h-drop__title').should('match', /В вашей корзине [0-9] товар(а|ов)*$/i);
    Header.cartDrop.find('.btn.btn--clear.ic-trash').click();
    Header.cartDrop.find('.h-drop__cards').should('not.be.visible');
  });
});

describe('cart tests with multiple products', ()=>{
  const page = new Page();
  before('navigate to page', () => {

  });

  it('Shuold add another product', ()=>{
    page.navigate();
    Login.loginToAccount(headerMenuData.header.userPhone, headerMenuData.header.userPass);
    Cart.addProductToCart(cartData.macbook);
    Cart.mainAddToCartBtn.click();
    Cart.modalCloseBtn.click();
    Cart.addProductToCart(cartData.watch);
    Cart.serchResults.find('.catalog-item.ec-product-item').first().click();
    Cart.mainAddToCartBtn.click();
    Cart.cartModal.find('.modal-popup-heading').should('have.text', 'Товар добавлен в корзину');
    Cart.cartModal.find('.m-total__title').should('have.text', 'В вашей корзине 2 товара');
    Cart.modalGoToCartBtn.click();
  });

  it('Should check total sum of products in cart', ()=>{
    let sum = 0;
    Cart.productsInCart.find('.c-cost .c-price').each(item => sum += +item.text);
    Cart.cartTotalSum.invoke('text').then(num => parseFloat(num)).should('eq', sum);
  })
});
