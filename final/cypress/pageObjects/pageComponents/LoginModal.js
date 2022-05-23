const Page = require('../Page');
const locators = require('../../locators');

class LoginModal extends Page {
  get accountBtn(){
    return cy.get(locators.login.accountBtn);
  }

  get nameInput(){
    return cy.get(locators.login.nameInput);
  }

  get passwordInput(){
    return cy.get(locators.login.passwordInput);
  }

  get loginCheckbox(){
    return cy.get(locators.login.loginCheckbox);
  }

  get loginBtn(){
    return cy.get(locators.login.loginBtn);
  }

  get userAccBtn(){
    return cy.get(locators.login.userAccBtn);
  }

  loginToAccount(userName, password){
    this.accountBtn.click();
    this.nameInput.type(userName);
    this.passwordInput.type(password);
    this.loginCheckbox.click();
    this.loginBtn.click();
    cy.wait(15000)
  }
}

module.exports = new LoginModal();