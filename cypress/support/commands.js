/// <reference types="cypress" />


import LoginPage from './pages/LoginPage';

Cypress.Commands.add('Login', (username, password) => {
    LoginPage.preencherUsuario(username);
    LoginPage.preencherSenha(password);
    LoginPage.clicarLogin();
});