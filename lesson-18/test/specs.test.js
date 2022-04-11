const { Builder, By, until, Key } = require('selenium-webdriver');
const { expect } = require('chai');
const MainPage = require('../PageObjects/MainPage');
const BaseElements = require('../helpers/baseHelpers');
const SearchComponent = require('../PageObjects/pageComponents/searchComponent');
const BasePage = require('../PageObjects/BasePage');

const mainPage = new MainPage();
const baseElements = new BaseElements();
const searchComponent = new SearchComponent();

describe('Chromedriver tests', () => {
  beforeEach(async() => {
    await BasePage.manageWindow();
  });

  after(async() => {
    await BasePage.close();
  });

  it('check main title', async () => {
    await BasePage.navigate('https://chromedriver.chromium.org/');
    expect(await BasePage.getTitle()).to.equal("ChromeDriver - WebDriver for Chrome");
  });

  it('check extensions title', async () => {
    await BasePage.navigate('https://chromedriver.chromium.org/');
    await baseElements.click(mainPage.extensionButton, 5000);
    expect(await BasePage.getTitle()).to.equal("ChromeDriver - WebDriver for Chrome - Chrome Extensions");
  });



});