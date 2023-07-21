"use strict";
/// <reference types="cypress" />
exports.__esModule = true;
exports.BasketMethods = void 0;
var basket_elements_1 = require("./basket.elements");
var BasketMethods = /** @class */ (function () {
    function BasketMethods() {
    }
    BasketMethods.prototype.deleteItemFromBasket = function () {
        basket_elements_1.BasketPageElements.elementsBasket.getBtnDelete().click();
    };
    BasketMethods.prototype.verifyNoItemsInBasket = function () {
        basket_elements_1.BasketPageElements.elementsBasket.getBtnCheckout().should('be.disabled');
    };
    return BasketMethods;
}());
exports.BasketMethods = BasketMethods;
exports["default"] = BasketMethods;
