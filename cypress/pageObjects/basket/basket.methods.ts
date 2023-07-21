/// <reference types="cypress" />

import { BasketPageElements } from "./basket.elements";

export class BasketMethods{ 
    deleteItemFromBasket() {
        BasketPageElements.elementsBasket.getBtnDelete().click();
    }
    verifyNoItemsInBasket(){
        BasketPageElements.elementsBasket.getBtnCheckout().should('be.disabled');
    }
}
export default BasketMethods;