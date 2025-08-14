import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../../support/pages/LoginPage';


Given('Acesso a página de login', () => {
    LoginPage.acessarPagina();
});


When('Realizo login com usuário {string} e senha {string}', (username, password) => {
    cy.Login(username, password);
});


Then('Devo ver o resultado {string}', (resultado) => {
    if (resultado === 'sucesso') {
        cy.url().should('eq', `${LoginPage.url}inventory.html`);
        LoginPage.elements.menuButton().should('be.visible');
        LoginPage.elements.inventoryList().should('be.visible');
    }

    if (resultado === 'erro_503') {
        LoginPage.elements.errorMessage()
            .should('be.visible')
            .should('contain', 'Epic sadface: Username and password do not match any user in this service');

        cy.intercept('POST', '**/json').as('InterceptLogin');
        LoginPage.clicarLogin();
        cy.wait('@InterceptLogin').its('response.statusCode').should('eq', 503);

        cy.url().should('eq', LoginPage.url);
    };

});
