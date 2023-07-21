"use strict";
/// <reference types="cypress" />
exports.__esModule = true;
exports.LoginMethods = void 0;
var product_elements_1 = require("../products/product.elements");
var login_elements_1 = require("./login.elements");
var LoginMethods = /** @class */ (function () {
    function LoginMethods() {
    }
    LoginMethods.prototype.login = function (email, password) {
        login_elements_1.LoginPageElements.elementsLogin.getTxtEmail().type(email);
        login_elements_1.LoginPageElements.elementsLogin.getTxtPassword().type(password);
        login_elements_1.LoginPageElements.elementsLogin.getBtnLogin().click();
    };
    LoginMethods.prototype.navigateToLoginAndCloseDialog = function (page) {
        cy.visit(page);
        login_elements_1.LoginPageElements.elementsLogin.getBtnCloseDialog().click();
    };
    LoginMethods.prototype.verifySuccessfullLogin = function () {
        product_elements_1.ProductPageElements.elementsProducts.getBtnBasket().should('be.visible');
    };
    return LoginMethods;
}());
exports.LoginMethods = LoginMethods;
