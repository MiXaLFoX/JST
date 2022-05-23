import Page from '../pageObjects/Page';
import Login from "../pageObjects/pageComponents/LoginModal";
import Header from "../pageObjects/pageComponents/Header";
import headerMenuData from '../pageObjects/pageData/headerData';
import locators from '../locators';

describe('login modal test', ()=>{
  const page = new Page();
  before('navigate to page', () => {
    page.navigate();
  });

  it('Should login to account', ()=>{
    Login.loginToAccount(headerMenuData.header.userPhone, headerMenuData.header.userPass);
    Login.userAccBtn.should('be.visible');
    Login.userAccBtn.find(locators.login.userAccBtnValue).should('have.text', headerMenuData.header.userName);
  });

  it('Check dropdown message/status of favorite btn when logged in', ()=>{
    Header.iconBtns.contains(headerMenuData.header.iconBtns.find(item => item === "Избранное")).click();
    Header.favDrop.find(locators.header.favDropTitle).invoke('text').should('match', /В избранном [0-9] товар(а|ов)*$/i);
  });

  it('Check the quantity of favorite goods added by user', ()=>{
    Header.favNumber.invoke('text').then(parseFloat).then((val)=>{
      Header.favDrop.find(locators.header.favProductAdded).its('length').should('eq', val);
    });
  });

  it('Check the quantity of favorite goods after deleting from list', ()=>{
    Header.favDrop.find(locators.header.favGoodsDeleteBtn).each($btn => $btn.click());
    Header.favDrop.find('p').should('have.text', headerMenuData.header.favMessage);
  })
});