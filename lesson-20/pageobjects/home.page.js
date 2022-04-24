const Page = require('./page');

class HomePage extends Page {
    get mainPageButtons(){
        return $('.buttons_pzbO').$$('a');
    }
}

module.exports = new HomePage();
