// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('PreenherCampos' , function() {
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Lucas Rodrigues')
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('45776121344')
    cy.get(':nth-child(3) > :nth-child(1) > input').type('Lucas123zz@yahho.com')
    cy.get(':nth-child(3) > :nth-child(2) > input').type('85988843878')
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type('60421031')
    cy.get('input[type="button"]').click()
    cy.get(':nth-child(4) > :nth-child(1) > input').type('9998')
    cy.get('.delivery-method').click()
    cy.get('input[type="file"]').selectFile('cypress/support/CNH/MG_3081a-copy.jpg' , {force : true})
    cy.get('button[type="submit"]').click()
    cy.get('.swal2-popup').should('be.visible')
})