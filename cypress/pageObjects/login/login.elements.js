"use strict";
exports.__esModule = true;
exports.LoginPageElements = void 0;
/// <reference types="cypress" />
var LoginPageElements = /** @class */ (function () {
    function LoginPageElements() {
    }
    Object.defineProperty(LoginPageElements, "elementsLogin", {
        get: function () {
            return {
                getBtnCloseDialog: function () { return cy.get('.close-dialog'); },
                getTxtEmail: function () { return cy.get('#email'); },
                getTxtPassword: function () { return cy.get('#password'); },
                getBtnLogin: function () { return cy.get('#loginButton'); }
            };
        },
        enumerable: false,
        configurable: true
    });
    return LoginPageElements;
}());
exports.LoginPageElements = LoginPageElements;
