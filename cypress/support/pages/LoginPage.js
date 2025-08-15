class LoginPage {
    constructor() {
        this.url = 'https://www.saucedemo.com/';
        this.elements = {
            loginLogo: '.login_logo',
            usernameInput: '[data-test="username"]',
            passwordInput: '[data-test="password"]',
            loginButton: '[data-test="login-button"]',
            errorMessage: '[data-test="error"]',
            menuButton: '#react-burger-menu-btn',
            inventoryList: '[data-test="inventory-container"]'
        };
    }

    visit() {
        cy.visit(this.url);
        cy.url().should('eq', this.url);
        cy.get(this.elements.loginLogo).should('have.text', 'Swag Labs');
    }

    login(username, password) {
        cy.Login(username, password);
    }

    validateSuccessLogin() {
        cy.url().should('eq', `${this.url}inventory.html`);
        cy.get(this.elements.menuButton).should('be.visible');
        cy.get(this.elements.inventoryList).should('be.visible');
    }

    validateError503() {
        cy.intercept('POST', '**/json').as('InterceptLogin');
        this.login('standard_user', 'senha@123');
        cy.wait('@InterceptLogin', { timeout: 30000 }).its('response.statusCode').should('eq', 503);
        cy.get(this.elements.errorMessage)
            .should('be.visible')
            .should('contain', 'Epic sadface: Username and password do not match any user in this service');
        cy.url().should('eq', this.url);
    }
}

export default LoginPage;
