const Page = require('../page');

class HeaderMenu extends Page{
  get apiButton(){
    return $('.navbar__link[href="/docs/api"]');
  }

  get searchField(){
    return $('.DocSearch.DocSearch-Button');
  }
}

module.exports = new HeaderMenu();