const { Builder, By, until } = require('selenium-webdriver');
const BasePage = require('../PageObjects/BasePage');

class BaseElements extends BasePage {
  constructor() {
    super();
  }

  async click(element, waitTime){
    await driver.wait(until.elementIsVisible(element), waitTime);
    await element.click();
  }

  async sendKeys(element, text, waitTime, keyName) {
    await driver.wait(until.elementIsVisible(element), waitTime);
    await element.sendKeys(text, keyName);
  }
}

module.exports = new BaseElements();