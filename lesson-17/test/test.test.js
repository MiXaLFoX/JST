const { Builder, By, until, Key } = require('selenium-webdriver');
const { expect } = require('chai');




describe('chromedriver test', function () {
  let driver;

  beforeEach(async() => {
    driver = new Builder().forBrowser('chrome').build();
    await driver.manage().window().setRect({ width: 1920, height: 768 });
  });

  afterEach(async() => {
    await driver.close();
  });

  it(`check titles`, async () => {
    await driver.get('https://chromedriver.chromium.org/home');
    expect(await driver.getTitle()).to.equal("ChromeDriver - WebDriver for Chrome");
    const extensionButton = await driver.findElement(By.css(".K1Ci7d.oXBWEc.jYxBte > li:nth-child(3) a"));
    await driver.wait(until.elementIsVisible(extensionButton), 5000);
    await extensionButton.click();
    expect(await driver.getTitle()).to.equal("ChromeDriver - WebDriver for Chrome - Chrome Extensions");
  });

  it(`check search button and search field`, async () => {
    await driver.get('https://chromedriver.chromium.org/home');
    const searchButton = await driver.findElement(By.css('.vu8Pwe.iWs3gf.YSH9J'));
    await searchButton.click();
    const searchField = await driver.findElement(By.css('.whsOnd.zHQkBf'));
    await driver.wait(until.elementIsVisible(searchField));
    await searchField.sendKeys('driver', Key.ENTER);
    await driver.sleep(2000);
    const searchResultDescription = await driver.findElement(By.css('.lZsZxe > div:nth-child(1)'));
    expect(await searchResultDescription.getText()).to.contain('driver');
  })
});