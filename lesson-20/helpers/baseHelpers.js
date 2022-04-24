const Page = require('../pageobjects/page');

class BaseHelpers extends Page{
  constructor() {
    super();
  }

  async clickElement(element) {
    await element.waitForEnabled();
    await element.click();
  }

  async setValue(element, value){
    await element.setValue(value);
  }

}

module.exports = new BaseHelpers();