/// <reference types="cypress" />
import { LoginMethods } from "../../pageObjects/login/login.methods";
const testData = require('../../fixtures/login.json')
var loginmethods = new LoginMethods()
describe('Juiceshop sample', () => {
    testData.loginData.forEach(testcase => {
        it('Validate that user can successfully login', () => {
            loginmethods.navigateToLoginAndCloseDialog('http://localhost:3000/#/login');
            loginmethods.login(testcase.email, testcase.password);
            loginmethods.verifySuccessfullLogin();            
        })
    })
})