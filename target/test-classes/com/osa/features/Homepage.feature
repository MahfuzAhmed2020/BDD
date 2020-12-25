Feature: OSA consulting techs forum login verification using parameter
@Homepage 
  Scenario: As an osa student, I should be able to login by using usernsme and password
    Given I am on osa home page "myUsername"
    And I enter my  username "mypassword"
    And I enter my password
    When I click on osa login button
    Then I verify the user account
