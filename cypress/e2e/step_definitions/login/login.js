import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../../support/pages/LoginPage';

const loginPage = new LoginPage();

Given('Acesso a página de login', () => {
    loginPage.visit();
});


When('Realizo login com usuário {string} e senha {string}', (username, password) => {
    loginPage.login(username, password);
});


Then('Devo ver o resultado {string}', (resultado) => {
    if (resultado === 'sucesso') {
        loginPage.validateSuccessLogin();
    }
    if (resultado === 'erro_503') {
        loginPage.validateError503();
    }
});
