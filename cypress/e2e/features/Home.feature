
  Feature: Home

    Scenario: Acessar Home com sucesso
      Given O usuário acesse o site "https://buger-eats.vercel.app/"
      Then O usuário deve visualizar mensagem na tela "Seja um parceiro entregador pela Buger Eats"

      Scenario: Acessar tela de cadastro apartir da home
      Given O usuário acesse o site "https://buger-eats.vercel.app/"
      When O usuário clica no botão "Cadastre-se para fazer entregas"
      Then O usuário deve visualizar mensagem na tela "Cadastre-se para "