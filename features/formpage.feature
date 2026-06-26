Feature: Form with multiple fields


  Scenario: Submit form with multiple fields
    Given user is on form page
    When user fills the form with following data:
      | field   | value            |
      | name    | John             |
      | email   | john@test.com    |
      | currAdd | LoweParel Mumbai |
      | permAdd | Borivali Mumbai  |
    Then form should be submitted successfully