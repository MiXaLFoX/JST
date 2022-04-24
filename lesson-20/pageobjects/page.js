/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class Page {
  navigate(path) {
    return browser.url(path)
  }
}

module.exports = Page;
