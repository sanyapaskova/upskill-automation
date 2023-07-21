import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginMethods } from "../../pageObjects/login/login.methods";
var login = new LoginMethods();
Given('user navigates to {string} page', (page:string) => {
    login.navigateToLoginAndCloseDialog(page);
});
When('user enters email {string} and password {string} and clicks login', (ddemail, ddpassword) => {
    login.login(ddemail, ddpassword);
})
Then('user successfully login', () =>{
    login.verifySuccessfullLogin();
})