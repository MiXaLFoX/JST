const Page = require('./Page');

class SmartphonesPage extends Page{
  get phonesFilters(){
    cy.get('.sort_panel.search_filter');
  }

  get colorFilter(){
    return cy.get('.left_panel u').contains('Цвет');
  }

  get blackColorCheckbox(){
    return cy.get('.left_panel u[style=\'background: url("https://sila.by/img/arr_18x18_3.png") right 8px center no-repeat rgb(242, 242, 243);\'] + span[style="display: inline-block;"] #idsort13_595_12');
  }

  get filterQuantity (){
    return cy.get('.sort_panel.search_filter label[for="idsort13_595_12"] sup')
      .invoke('text')
      // .then(text => text.parseFloat)
  }

  get filteredLink(){
    return cy.get('.filter_fly u');
  }

  get goodsQuantity(){
    return cy.get('.tovars');
  }

  get putincartButton(){
    return cy.get('.tovars .btn_zak');
  }
}

module.exports = new SmartphonesPage();