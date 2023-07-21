/// <reference types="cypress" />
export class ProductPageElements {
    static get elementsProducts() {
        return {
            getBtnBasket: () =>  cy.get('[aria-label="Show the shopping cart"]'),
            getBtnSearch: () => cy.get('#searchQuery'),
            getTxtSearch: () => cy.get('#searchQuery > mat-form-field'),
            getTblTile: () => cy.get('mat-grid-tile mat-card'),
            getBtnAddToBasket: () => cy.get('[aria-label="Add to Basket"]'),
            getLblNotification: () => cy.get('.fa-3x.warn-notification')
        }
    }
}