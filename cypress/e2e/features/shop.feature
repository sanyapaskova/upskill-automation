Feature: Validate user can add items to basket
Feature Validate user can add items to basket

Background: login
Given user successfully logins on page 'http://localhost:3000/#/login' with valid email 'sanja.gorgievska@gmail.com' and password '#Newuser12#'

Scenario: Validate that user can search and add items to basket
When user searches 'apple juice' and adds to basket
Then '1' item is in the basket

Scenario: Validate that user can add and delete items from basket
When user searches 'apple juice' and adds to basket
Then '1' item is in the basket
When user opens basket
And delete item
Then basket is empty

Scenario: Validate that user can\'t add item that is out of stock
When user searches 'king of the hill' and adds to basket
Then '0' item is in the basket
When user opens basket
Then basket is empty