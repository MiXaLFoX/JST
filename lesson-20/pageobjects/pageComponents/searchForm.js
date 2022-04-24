const Page = require('../page');

class SearchForm extends Page{
  get searchInput(){
    return $('.DocSearch-Input');
  }

  get listItem(){
    return $('#docsearch-item-0');
  }
}

module.exports = new SearchForm();