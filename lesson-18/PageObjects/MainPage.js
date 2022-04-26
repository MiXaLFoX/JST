const BasePage = require('./BasePage');
const { Builder, By, until } = require('selenium-webdriver');

class MainPage extends BasePage {
  constructor() {
    super();
  }

  get extensionButton() {
    return driver.findElement(By.css(".K1Ci7d.oXBWEc.jYxBte > li:nth-child(3) a"));
  }

}

module.exports = new MainPage();
