/* global Given, Then, When */

import HomePage from '../page/home-page'

Given("O usuário acesse o site {string}", () => {
  HomePage.acessarSite()
});

When("O usuário clica no botão {string}", () => {
  HomePage.botaoCadastrar()
});

Then("O usuário deve visualizar mensagem na tela {string}", (titulohome, tituloCadastro) => {
  HomePage.getH1().should('contain', titulohome || tituloCadastro)
});