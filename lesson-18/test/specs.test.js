const { Builder, By, until, Key } = require('selenium-webdriver');
const { expect } = require('chai');
const MainPage = require('../PageObjects/MainPage');
const BaseElements = require('../helpers/baseHelpers');
const SearchComponent = require('../PageObjects/pageComponents/searchComponent');
const BasePage = require('../PageObjects/BasePage');

//const mainPage = new MainPage();
//const baseElements = new BaseElements();
//const searchComponent = new SearchComponent();

describe('Chromedriver tests', () => {
  before(async() => {
    await BasePage.manageWindow();
  });

  after(async(done) => {
    await BasePage.close(done());
  });

  it('check main title', async () => {
    await BasePage.navigate('https://chromedriver.chromium.org/');
    expect(await BasePage.getTitle()).to.equal("ChromeDriver - WebDriver for Chrome");
  });

  it('check extensions title', async () => {
    await BasePage.navigate('https://chromedriver.chromium.org/');
    await BaseElements.click(MainPage.extensionButton, 5000);
    expect(await BasePage.getTitle()).to.equal("ChromeDriver - WebDriver for Chrome - Chrome Extensions");
  });

  it(`check search button and search field`, async () => {
    await BasePage.navigate('https://chromedriver.chromium.org/');
    await BaseElements.click(SearchComponent.searchButton, 3000);
    await BaseElements.sendKeys(SearchComponent.searchField, 'driver', 5000, Key.ENTER);
    await driver.sleep(1000);
    expect(await SearchComponent.searchResultDescription.getText()).to.contain('driver');
  });
});
