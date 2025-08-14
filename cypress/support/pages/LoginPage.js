class LoginPage {
    url = 'https://www.saucedemo.com/';

    elements = {
        usernameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('[data-test="login-button"]'),
        errorMessage: () => cy.get('[data-test="error"]'),
        menuButton: () => cy.get('#react-burger-menu-btn'),
        inventoryList: () => cy.get('[data-test="inventory-container"]')
    };

    acessarPagina() {
        cy.visit(this.url);
    }

    preencherUsuario(username) {
        this.elements.usernameInput().clear().type(username, { log: false });
    }

    preencherSenha(password) {
        this.elements.passwordInput().clear().type(password, { log: false });
    }

    clicarLogin() {
        this.elements.loginButton().should('be.visible').click();
    }
}

export default new LoginPage();
