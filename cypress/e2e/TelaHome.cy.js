/// <reference types="Cypress" />

describe('Buger Eats', function() {

  before(function(){
    cy.visit('https://buger-eats.vercel.app/')
  })

  it('verificar titulo da aplicação', function() {
    cy.title().should('be.equal' , 'Buger Eats')
  })

  it('verificar h1 da aplicação' , function() {
    cy.get('h1').contains('' , 'Seja um parceiro entregador pela Buger Eats')
  })

})