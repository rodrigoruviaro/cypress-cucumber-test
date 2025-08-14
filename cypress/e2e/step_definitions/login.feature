Feature: Login

  Scenario Outline: Login <descricao>
    Given Acesso a página de login
    When Realizo login com usuário "<username>" e senha "<password>"
    Then Devo ver o resultado "<resultado>"

    Examples:
      | descricao        | username       | password       | resultado |
      | com sucesso      | standard_user  | secret_sauce   | sucesso   |
      | com erro 503     | standard_user  | senha@123      | erro_503  |
