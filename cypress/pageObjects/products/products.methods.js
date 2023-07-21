"use strict";
/// <reference types="cypress" />
exports.__esModule = true;
exports.ProductsMethods = void 0;
var product_elements_1 = require("./product.elements");
var ProductsMethods = /** @class */ (function () {
    function ProductsMethods() {
    }
    ProductsMethods.prototype.addItemToBasket = function (itemName, numAdded) {
        product_elements_1.ProductPageElements.elementsProducts.getBtnSearch().click();
        product_elements_1.ProductPageElements.elementsProducts.getTxtSearch().type(itemName);
        product_elements_1.ProductPageElements.elementsProducts.getTxtSearch().type('{enter}');
        product_elements_1.ProductPageElements.elementsProducts.getTblTile().should('have.length', numAdded);
        product_elements_1.ProductPageElements.elementsProducts.getBtnAddToBasket().click();
    };
    ProductsMethods.prototype.verifyItemNumberAddedToBasket = function (numAdd) {
        product_elements_1.ProductPageElements.elementsProducts.getLblNotification().should('have.text', numAdd);
    };
    ProductsMethods.prototype.openBasket = function () {
        product_elements_1.ProductPageElements.elementsProducts.getLblNotification().click();
    };
    return ProductsMethods;
}());
exports.ProductsMethods = ProductsMethods;
