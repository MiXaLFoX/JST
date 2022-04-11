const { Builder, By, until } = require('selenium-webdriver');
const BasePage = require('../BasePage');

class SearchComponent extends BasePage {
  get searchButton() {
    return driver.findElement(By.css('.vu8Pwe.iWs3gf.YSH9J'))
  }

  get searchField() {
    return driver.findElement(By.css('.whsOnd.zHQkBf'))
  }

  get searchResultDescription() {
    return driver.findElement(By.css('.lZsZxe > div:nth-child(1)'));
  }
}

module.exports = new SearchComponent();
