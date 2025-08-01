/// <reference types="cypress" />


Cypress.Commands.add('Login', (username, password) => {
    cy.get('[data-test="username"]').clear().type(username, { log: false });
    cy.get('[data-test="password"]').clear().type(password, { log: false });
});