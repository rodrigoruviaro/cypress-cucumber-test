import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const Url = 'https://www.saucedemo.com/';

Given('acesso a página de login', () => {
    cy.visit(Url);
});

When('realizo login com usuário {string} e senha {string}', (usuario, senha) => {
    cy.Login(usuario, senha);
    cy.get('[data-test="login-button"]').should('be.visible').click();
});


// Login com Sucesso
Then('devo ser redirecionado para a página de inventário', () => {
    cy.url().should('eq', `${Url}inventory.html`);
});

Then('o menu deve estar visível', () => {
    cy.get('#react-burger-menu-btn').should('be.visible');
});

Then('a lista de produtos deve estar visível', () => {
    cy.get('[data-test="inventory-container"]').should('be.visible');
});


// Login com Falha
Then('deve exibir a mensagem de erro de login', () => {
    cy.get('[data-test="error"]')
        .should('be.visible')
        .should('contain', 'Epic sadface: Username and password do not match any user in this service');
});

Then('o status da requisição deve ser 503', () => {
    cy.intercept('POST', '**/json').as('InterceptLogin');
    cy.get('[data-test="login-button"]').click();
    cy.wait('@InterceptLogin', { timeout: 30000 })
        .its('response.statusCode')
        .should('eq', 503);
});

Then('a URL deve permanecer a mesma da tela de login', () => {
    cy.url().should('eq', Url);
});
