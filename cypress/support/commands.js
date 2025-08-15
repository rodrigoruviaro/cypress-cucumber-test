/// <reference types="cypress" />


Cypress.Commands.add('Login', (username, password) => {
    cy.get('[data-test="username"]').clear().type(username, { log: false });
    cy.get('[data-test="password"]').clear().type(password, { log: false });
    cy.get('[data-test="login-button"]').should('be.visible').click();
});


Cypress.Commands.add('ButtonSubmit', (button) => {
    cy.get(`input[type="submit"][value="${button}"]`).click();
});


Cypress.Commands.add('Button', (button) => {
    cy.contains('button', button).click();
});