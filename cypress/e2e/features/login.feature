Feature: Verify user successfully logins to juice shop page

    Feature Verify user successfully logins to juice shop page

    Scenario: Verify user successfully login
        Given user navigates to 'http://localhost:3000/#/login' page
        When user enters email '<ddemail>' and password '<ddpassword>' and clicks login
        Then user successfully login

        Examples:
            | ddemail                      | ddpassword    |
            |  |  |
            |  |  |