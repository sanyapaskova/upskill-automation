/// <reference types="cypress" />
import BasketMethods from "../../pageObjects/basket/basket.methods";
import { LoginMethods } from "../../pageObjects/login/login.methods";
import { ProductsMethods } from "../../pageObjects/products/products.methods";

var loginmethods = new LoginMethods()
var productmethods = new ProductsMethods()
var basketmethods = new BasketMethods()

describe('Juiceshop sample', () => {

  beforeEach(function(){
    loginmethods.navigateToLoginAndCloseDialog('http://localhost:3000/#/login');
    loginmethods.login('sanja.gorgievska@gmail.com', '#Newuser12#');    
    loginmethods.verifySuccessfullLogin();
  })

  it('Validate that user can search and add items to basket', () => {
    let searchitem = 'apple juice';
    let itemsinbasket = 1;
    productmethods.addItemToBasket(searchitem, itemsinbasket);
    productmethods.verifyItemNumberAddedToBasket(itemsinbasket.toString());
  })

  it('Validate that user can add and delete items from the bascket', () => {
    let searchitem = 'apple juice';
    let itemsinbasket = 1;
    productmethods.addItemToBasket(searchitem, itemsinbasket)
    productmethods.verifyItemNumberAddedToBasket(itemsinbasket.toString());
    productmethods.openBasket()
    basketmethods.deleteItemFromBasket();
    basketmethods.verifyNoItemsInBasket()
  })

  it('Validate that user can\'t add item that is out of stock', () => {
    let searchitem = 'king of the hill';
    let founditems = 1;
    let itemsinbasket = 0;
    productmethods.addItemToBasket(searchitem, founditems)
    productmethods.verifyItemNumberAddedToBasket(itemsinbasket.toString());
    productmethods.openBasket()
    basketmethods.verifyNoItemsInBasket()
  }) 

})




