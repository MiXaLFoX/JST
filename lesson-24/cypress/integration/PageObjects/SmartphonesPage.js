const Page = require('./Page');

class SmartphonesPage extends Page{
  get phonesFilters(){
    cy.get('.sort_panel.search_filter');
  }

  get colorFilter(){
    return cy.get('.left_panel u[style=\'background: url("https://sila.by/img/arr_18x18_1.png") right 8px center no-repeat rgb(255, 255, 255);\'] + span[style="display: none;"]')
  }

  get blackColorCheckbox(){
    return cy.get('.left_panel u[style=\'background: url("https://sila.by/img/arr_18x18_3.png") right 8px center no-repeat rgb(242, 242, 243);\'] + span[style="display: inline-block;"] #idsort13_595_12')
  }
}

module.exports = new SmartphonesPage();