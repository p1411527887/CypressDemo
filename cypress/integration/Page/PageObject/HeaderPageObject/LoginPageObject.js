
import {LoginPageUI} from "../../PageUI/HeaderPageUI/LoginPageUI";
export class LoginPageObject {
    Element = {
        loginByTextBox: () => cy.xpath(LoginPageUI.LOGIN_BY_PASSWORD_TEXTBOX),
        loginByPassWordTextBox : () => cy.xpath(LoginPageUI.LOGIN_BY_PASSWORD_TEXTBOX),
        loginButton : () => cy.xpath(LoginPageUI.LOGIN_BUTTON),
        signUpByNameTextBox : () => cy.xpath(LoginPageUI.SIGN_UP_BY_NAME_TEXTBOX),
        signUpByEmailTextBox : () => cy.xpath(LoginPageUI.SIGN_UP_BY_EMAIL_TEXTBOX),
        signUpButton : () => cy.xpath(LoginPageUI.SIGN_UP_BUTTON),
        }

    login(username, password) {
        this.Element.loginByTextBox().type(username);
        this.Element.loginByTextBox().type(password);
        this.Element.loginButton().click();
    }

    }
