/// <reference types="cypress" />

import registerElements from "../common/register-elements"

class registerPage {
  
  escreverNome(firstName) {
    return cy.get(registerElements.inputName()).type(firstName)
  }

  escreverCpf(numberCpf) {
    return cy.get(registerElements.inputCpf()).type(numberCpf)
  }

  escreverEmail(email) {
    return cy.get(registerElements.inputEmail()).type(email)
  }

  escreverWpp(phone) {
    return cy.get(registerElements.inputWpp()).type(phone)
  }

  escreverCep(cep) {
    return cy.get(registerElements.inputCep()).type(cep)
  }

  clicarBuscarCep(){
    return cy.get(registerElements.buttonSearchCep()).click()
  }

  escreverNumeroCasa(numberHouse) {
    return cy.get(registerElements.inputNumberHome()).type(numberHouse)
  }

  escreverComplemento(complement) {
    return cy.get(registerElements.inputCep()).type(complement)
  }

  selecionarMetodoDeEnterga(delivery) {
    return cy.get(registerElements.listMethodDelivery()).find('li').contains(delivery).click()
  }

  anexaCnh() {
    return cy.get(registerElements.inputCnh()).selectFile('cypress/support/CNH/MG_3081a-copy.jpg' , {force : true})
  }

  clicarBotaoRegistrar() {
    return cy.get(registerElements.buttonRegister()).click()
  }

  getModalSucess(mensageSucess) {
    return cy.get(registerElements.modalSucess())
  }

} 

export default new registerPage();
