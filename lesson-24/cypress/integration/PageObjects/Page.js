class Page{
  navigate = (url) => {
    cy.visit(url);
  }
}

module.exports = Page;