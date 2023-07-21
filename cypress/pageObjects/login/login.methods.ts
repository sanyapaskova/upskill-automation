/// <reference types="cypress" />

import { ProductPageElements } from "../products/product.elements";
import { LoginPageElements } from "./login.elements";

export class LoginMethods{
    login(email, password){
        LoginPageElements.elementsLogin.getTxtEmail().type(email);
        LoginPageElements.elementsLogin.getTxtPassword().type(password);
        LoginPageElements.elementsLogin.getBtnLogin().click();
    }
    navigateToLoginAndCloseDialog(page: string){
        cy.visit(page);
        LoginPageElements.elementsLogin.getBtnCloseDialog().click();
    }
    verifySuccessfullLogin(){
       ProductPageElements.elementsProducts.getBtnBasket().should('be.visible');
    }
}