Feature: OSA consulting techs forum login verification

  Background: 
    Given I am on osa home page
@Login @LoginValidUsername
  Scenario: As a osa student, I should be able to login by using usernsme and password
    And I enter username
    And I enter password
    When I click on login button
    Then I verify the user
@Login @LoginInvalidUsername
  Scenario: As a osa student, I should be able to login by using usernsme and password
    And I enter invalid username
    And I enter password
    When I click on login button 
    Then I verify the user
