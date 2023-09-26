/// <reference types="cypress" />

import homeElements from '../common/home-elements'

class HomePage {
  acessarSite() {
    return cy.visit('/')
  }

  getH1() {
    return cy.get(homeElements.h1())
  }

  botaoCadastrar() {
    return cy.get(homeElements.buttonRegister()).click()
  }

}

export default new HomePage();