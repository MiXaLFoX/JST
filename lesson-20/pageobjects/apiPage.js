const Page = require('./page');

class ApiPage extends Page{
  get sideBar(){
    return $('.menu.thin-scrollbar');
  }
}

module.exports = new ApiPage();
