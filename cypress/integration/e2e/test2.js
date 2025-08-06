import {LoginPageObject} from "../Page/PageObject/HeaderPageObject/LoginPageObject";


describe('Login', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/login');

    })

    it('should be login successfully ', () => {
        const loginPage = new LoginPageObject();
        loginPage.login('phat.truong@mercatus.com','Abcd1234');

    });

});