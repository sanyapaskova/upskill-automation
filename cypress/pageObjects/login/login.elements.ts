/// <reference types="cypress" />
export class LoginPageElements {
    static get elementsLogin() {
        return {
            getBtnCloseDialog: () => cy.get('.close-dialog'),
            getTxtEmail: () => cy.get('#email'),
            getTxtPassword: () =>  cy.get('#password'),
            getBtnLogin: () =>  cy.get('#loginButton'),
        }
    }
}
