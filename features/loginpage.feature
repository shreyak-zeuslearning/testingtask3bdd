Feature: Login functionality 
 
Scenario: Successful login with valid credentials 
  Given user is on login page 
  When user enters valid username and password 
  And clicks on login button 
  Then user should be navigated to dashboard 
 
Scenario: Invalid login attempt 
  Given user is on login page 
  When user enters invalid credentials 
  And clicks on login button
  Then error message should be displayed

Scenario: Verify error message visibility 
    Given user is on login page
    When user enters invalid credentials
    And clicks on login button
    Then error message should be displayed 

Scenario: Verify logout functionality 
    Given user is already logged in 
    When user clicks logout button
    Then user is back on login page
    