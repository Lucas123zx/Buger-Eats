/* global Given, Then, When */

import registerPage from '../page/register-page'

When("O usuário informe os seguintes dados:", (dataTable) => {
  const data = dataTable.hashes()[0];
  registerPage.escreverNome(data["Full Name"]);
  registerPage.escreverCpf(data.Cpf);
  registerPage.escreverEmail(data.Email);
  registerPage.escreverWpp(data.Numero);
  registerPage.escreverCep(data.Cep);
  registerPage.escreverNumeroCasa(data["Numero Casa"]);
  registerPage.escreverComplemento(data.Complemento);
  registerPage.selecionarMetodoDeEnterga(data["Metodo de entrega"]);
});

And("O usuário anexe cnh", () => {
  registerPage.anexaCnh();
});

And("O usuário clica no botão Cadastre-se para fazer entregas", () => {
  registerPage.clicarBotaoRegistrar();
});

Then("O usuário deve visualizar modal com a mensagem {string}", (mensageSucess) => {
  registerPage.getModalSucess(mensageSucess).should('contain', mensageSucess);
});