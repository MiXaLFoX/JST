const { Builder, By, until } = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();

class BasePage {
  constructor () {
    global.driver = driver;
  }

  static async navigate(url) {
    await driver.get(url);
  }

  static async manageWindow() {
    await driver.manage().window().setRect({ width: 1920, height: 768 });
  }

  static async getTitle() {
    return driver.getTitle();
  }

  static async close() {
    await driver.close();
  }
}

module.exports = BasePage;
