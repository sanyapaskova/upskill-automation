/// <reference types="cypress" />

import { ProductPageElements } from "./product.elements";

export class ProductsMethods{
    addItemToBasket(itemName: string, numAdded: number){
        ProductPageElements.elementsProducts.getBtnSearch().click();
        ProductPageElements.elementsProducts.getTxtSearch().type(itemName);
        ProductPageElements.elementsProducts.getTxtSearch().type('{enter}');
        ProductPageElements.elementsProducts.getTblTile().should('have.length', numAdded);
        ProductPageElements.elementsProducts.getBtnAddToBasket().click();
    }
    verifyItemNumberAddedToBasket(numAdd: string){
       ProductPageElements.elementsProducts.getLblNotification().should('have.text', numAdd);
    }
    openBasket(){
        ProductPageElements.elementsProducts.getLblNotification().click();
    }
}