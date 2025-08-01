Feature: Login

  Scenario: Login com usuário válido e validação de elementos na página
    Given acesso a página de login
    When realizo login com usuário "standard_user" e senha "secret_sauce"
    Then devo ser redirecionado para a página de inventário
    And o menu deve estar visível
    And a lista de produtos deve estar visível

  Scenario: Login com senha incorreta deve retornar erro
    Given acesso a página de login
    When realizo login com usuário "standard_user" e senha "senha@123"
    Then deve exibir a mensagem de erro de login
    And o status da requisição deve ser 503
    And a URL deve permanecer a mesma da tela de login