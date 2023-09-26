
Feature: Cadastro

  Background:
    Given O usuário acesse o site "https://buger-eats.vercel.app/"
    When O usuário clica no botão "Cadastre-se para fazer entregas"
    Then O usuário deve visualizar mensagem na tela "Cadastre-se para "

      Scenario: Realizar Cadastro com sucesso
        When O usuário informe os seguintes dados:
        | Full Name | Cpf           | Email             | Numero        | Cep         | Numero Casa | Complemento | Metodo de entrega |  
        | Teste     | 45776121344   | jutuoka@uoak.com  | 85988875647   | 60421010    | 2323        | Casa B3     | Moto              | 
        And O usuário anexe cnh
        And O usuário clica no botão Cadastre-se para fazer entregas
        Then O usuário deve visualizar modal com a mensagem "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."

