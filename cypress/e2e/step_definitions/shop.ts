import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginMethods } from "../../pageObjects/login/login.methods";
import { ProductsMethods } from "../../pageObjects/products/products.methods";
import BasketMethods from "../../pageObjects/basket/basket.methods";
var loginmethods = new LoginMethods();
var productmethods = new ProductsMethods();
var basketmethods = new BasketMethods();
Given('user successfully logins on page {string} with valid email {string} and password {string}', (page: string, email: string, pass: string) => {
    loginmethods.navigateToLoginAndCloseDialog(page);
    loginmethods.login(email, pass);
    loginmethods.verifySuccessfullLogin();
})
When('user searches {string} and adds to basket', (searchTerm: string) => {
    productmethods.addItemToBasket(searchTerm, 1);
})
Then('{string} item is in the basket', (numItems: string) => {
    productmethods.verifyItemNumberAddedToBasket(numItems);
})
When('user opens basket', () => {
    productmethods.openBasket();
})
When('delete item', ()=>{
    basketmethods.deleteItemFromBasket();
})
Then('basket is empty', () => {
    basketmethods.verifyNoItemsInBasket();
})

