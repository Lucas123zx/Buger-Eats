/// <reference types="Cypress" />


describe('Buger Eats Cadastro', function() {

    const email = 'lucas123play@yahoo,com'

    beforeEach(function() {
      cy.visit('https://buger-eats.vercel.app/deliver')
    })
    it('Acesssar site para cadastro de entregadores' , function() {
      cy.title('be.equal' , 'https://buger-eats.vercel.app/deliver')
        .get('h1')
        .contains('' , 'Cadastre-se para')
    })

    it('Submeter formulário preenchedo campos obrigatórios' , function() {
     cy.PreenherCampos()
    })

    it('Submeter cadastro sem preencher campos', function() {
      cy.get('button')
      .click()
      .should('be.visible' ,'alert-error' )
    })

    it('Submeter cadastro com formatação de email inválido' , function(){
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Lucas Rodrigues')
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('45776121344')
      cy.get('input[type="email"]').type(email)
      cy.get('button[type="submit"]').click()
      cy.get('input[type="email"]').should('be.visible')  
    })

    it('Preencher campo cpf com caracteres inválidos' , function() {
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input')
        .type('457.543.213.45')
        .get('button[type="submit"]')
        .click()
        .get('span.alert-error')
        .should('be.visible' ,'alert-error')
    })

    it('Submeter cadastro sem numero de telefone ' , function() {
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Lucas Rodrigues')
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('45776121344')
      cy.get(':nth-child(3) > :nth-child(1) > input').type('Teste@gmail.com')
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type('60421010')
      cy.get('input[type="button"]').click()
      cy.get(':nth-child(4) > :nth-child(1) > input').type('9998')
      cy.get('.delivery-method').click()
      cy.get('input[type="file"]').selectFile('cypress/support/CNH/MG_3081a-copy.jpg' , {force : true})
      cy.get('button[type="submit"]').click()
        .get('span.alert-error')
        .should('be.visible' ,'alert-error')
    })  

    it('submeter cadastro sem endereço' , function() {
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Lucas Rodrigues')
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('45776121344')
      cy.get(':nth-child(3) > :nth-child(1) > input').type('Teste@gmail.com')
      cy.get('.delivery-method').click()
      cy.get('input[type="file"]').selectFile('cypress/support/CNH/MG_3081a-copy.jpg' , {force : true})
      cy.get('button[type="submit"]').click()
        .get('span.alert-error')
        .should('be.visible' ,'alert-error') 
    })

    it('Consultar endereço informando cep inválido' , function() {
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Lucas Rodrigues')
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('45776121344')
      cy.get(':nth-child(3) > :nth-child(1) > input').type('Teste@gmail.com')
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type('4444444')
      cy.get('input[type="button"]').click()
      cy.get('.delivery-method').click()
        .get('span.alert-error')
        .should('be.visible' ,'alert-error') 
    })

    it('Consultar endereço por cep incorreto' , function() {
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Lucas Rodrigues')
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('45776121344')
      cy.get(':nth-child(3) > :nth-child(1) > input').type('Teste@gmail.com')
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type('60421015')
      cy.get('input[type="button"]').click()
      cy.get(':nth-child(3) > input')
        .should('have.value' ,'') 
    })

    it.only('Submeter cadasto sem informar numero de residencia' , function() {
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Lucas Rodrigues')
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('45776121344')
      cy.get(':nth-child(3) > :nth-child(1) > input').type('Teste@gmail.com')
      cy.get(':nth-child(3) > :nth-child(2) > input').type('85988843878')
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type('60421035')
      cy.get('input[type="button"]').click()
      cy.get('.delivery-method').click()
      cy.get('input[type="file"]').selectFile('cypress/support/CNH/MG_3081a-copy.jpg' , {force : true})
      cy.get('button[type="submit"]').click()
        .get('span.alert-error')
        .should('be.visible' ,'alert-error') 
    })

    it('Submeter cadastro sem selecionar metodo de entrega' , function() {
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Lucas Rodrigues')
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('45776121344')
      cy.get(':nth-child(3) > :nth-child(1) > input').type('Teste@gmail.com')
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type('60421010')
      cy.get('input[type="button"]').click()
      cy.get(':nth-child(4) > :nth-child(1) > input').type('9998')
      cy.get('input[type="file"]').selectFile('cypress/support/CNH/MG_3081a-copy.jpg' , {force : true})
      cy.get('button[type="submit"]').click()
        .get('span.alert-error')
        .should('be.visible' ,'alert-error')
    })

    it('Submeter cadastro selecionando dois metodo de entrega' , function() {
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Lucas Rodrigues')
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('45776121344')
      cy.get(':nth-child(3) > :nth-child(1) > input').type('Teste@gmail.com')
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type('60421010')
      cy.get('input[type="button"]').click()
      cy.get(':nth-child(4) > :nth-child(1) > input').type('9998')
      cy.get('.delivery-method > :nth-child(1)').click()
      cy.get('.delivery-method > :nth-child(2)').click()
      cy.get('input[type="file"]').selectFile('cypress/support/CNH/MG_3081a-copy.jpg' , {force : true})
      cy.get('button[type="submit"]').click()
        .get('span.alert-error')
        .should('be.visible' ,'alert-error')
    })

    it('Submeter cadastro sem enviar upload de arquivo' , function() {
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Lucas Rodrigues')
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('45776121344')
      cy.get(':nth-child(3) > :nth-child(1) > input').type('Teste@gmail.com')
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type('60421010')
      cy.get('input[type="button"]').click()
      cy.get(':nth-child(4) > :nth-child(1) > input').type('9998')
      cy.get('.delivery-method').click()
      cy.get('button[type="submit"]').click()
        .get('span.alert-error')
        .should('be.visible' ,'alert-error')
    })

    it('Voltar a tela home da aplicação' , function() {
      cy.get('a')
        .contains('' , 'Seja um parceiro entregador pela Buger Eats')
    })

})