import LoginModal from "../../../../../../eventory/src/features/modals/LoginModal";

const Page = require('../pageObjects/Page');
const Login = require('../pageObjects/pageComponents/LoginModal');
const Header = require('../pageObjects/pageComponents/Header');
const headerMenuData = require('../pageObjects/pageData/headerData');

describe('login modal test', ()=>{
  const page = new Page();
  before('navigate to page', () => {
    page.navigate();
  });

  it('login to account', ()=>{
    Login.loginToAccount(headerMenuData.header.userPhone, headerMenuData.header.userPass);
    cy.wait(15000);
    Login.userAccBtn.should('be.visible');
  })
});