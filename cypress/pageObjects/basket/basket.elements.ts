/// <reference types="cypress" />
export class BasketPageElements {
    static get elementsBasket(){
        return {
            getBtnDelete: () => cy.get('[data-icon="trash-alt"]'),
            getBtnCheckout: () => cy.get('#checkoutButton')
        }
    }
}