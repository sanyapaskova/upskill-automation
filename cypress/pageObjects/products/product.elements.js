"use strict";
exports.__esModule = true;
exports.ProductPageElements = void 0;
/// <reference types="cypress" />
var ProductPageElements = /** @class */ (function () {
    function ProductPageElements() {
    }
    Object.defineProperty(ProductPageElements, "elementsProducts", {
        get: function () {
            return {
                getBtnBasket: function () { return cy.get('[aria-label="Show the shopping cart"]'); },
                getBtnSearch: function () { return cy.get('#searchQuery'); },
                getTxtSearch: function () { return cy.get('#searchQuery > mat-form-field'); },
                getTblTile: function () { return cy.get('mat-grid-tile mat-card'); },
                getBtnAddToBasket: function () { return cy.get('[aria-label="Add to Basket"]'); },
                getLblNotification: function () { return cy.get('.fa-3x.warn-notification'); }
            };
        },
        enumerable: false,
        configurable: true
    });
    return ProductPageElements;
}());
exports.ProductPageElements = ProductPageElements;
