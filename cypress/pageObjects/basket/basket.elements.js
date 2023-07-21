"use strict";
exports.__esModule = true;
exports.BasketPageElements = void 0;
/// <reference types="cypress" />
var BasketPageElements = /** @class */ (function () {
    function BasketPageElements() {
    }
    Object.defineProperty(BasketPageElements, "elementsBasket", {
        get: function () {
            return {
                getBtnDelete: function () { return cy.get('[data-icon="trash-alt"]'); },
                getBtnCheckout: function () { return cy.get('#checkoutButton'); }
            };
        },
        enumerable: false,
        configurable: true
    });
    return BasketPageElements;
}());
exports.BasketPageElements = BasketPageElements;
