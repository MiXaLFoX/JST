const Page = require('../../pageobjects/page');
const Homepage = require('../../pageobjects/home.page');
const BaseHelpers = require('../../helpers/baseHelpers');
const HeaderMenu = require('../../pageobjects/pageComponents/headerMenu');
const ApiPage = require('../../pageobjects/apiPage');
const SearchForm = require('../../pageobjects/pageComponents/searchForm');

describe('webdriverIO tests', function() {
    it(`should check title`, async () => {
        await Page.navigate('https://webdriver.io/');
        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
    });

    it('should check the number of buttons', async () => {
        await Page.navigate('https://webdriver.io/');
        await expect(Homepage.mainPageButtons()).toBeElementsArrayOfSize(5);
    });

    it('should check side bar in API section', async () => {
        await Page.navigate('https://webdriver.io/');
        await BaseHelpers.clickElement(HeaderMenu.apiButton());
        await expect(browser).toHaveUrl('https://webdriver.io/docs/api');
        await expect(ApiPage.sideBar()).toExist();
    });

    it('should check title in found section', async () => {
        await Page.navigate('https://webdriver.io/');
        await BaseHelpers.clickElement(HeaderMenu.searchField());
        await BaseHelpers.setValue(SearchForm.searchInput(), 'wait');
        await BaseHelpers.clickElement(SearchForm.listItem());
        await expect($('header h1')).toHaveText('waitForExist');
    });
});
