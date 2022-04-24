/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class Page {
    constructor() {

    }
    navigate(path) {
        return browser.url(path)
    }
}

module.exports = new Page();
